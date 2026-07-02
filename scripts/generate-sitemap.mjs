import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import {
  assignBlogSlugs,
  parseBlogDateToIso,
  parseBlogsFromConstantsSource,
} from "../src/utils/blogSeo.js";

const SITE_URL = "https://jimmy-ramani-0912.github.io/portfolio";
const rootDir = fileURLToPath(new URL("..", import.meta.url));
const constantsPath = `${rootDir}/src/data/constants.js`;
const buildDate = new Date().toISOString().slice(0, 10);

const source = readFileSync(constantsPath, "utf8");
const blogEntries = parseBlogsFromConstantsSource(source);
const slugById = assignBlogSlugs(blogEntries);

const staticRoutes = [
  { loc: `${SITE_URL}/`, changefreq: "weekly", priority: "1.0", lastmod: buildDate },
  {
    loc: `${SITE_URL}/projects`,
    changefreq: "weekly",
    priority: "0.9",
    lastmod: buildDate,
  },
  {
    loc: `${SITE_URL}/blogs`,
    changefreq: "weekly",
    priority: "0.85",
    lastmod: buildDate,
  },
];

const blogRoutes = blogEntries.map(({ id, date }) => {
  const slug = slugById.get(String(id));
  return {
    loc: `${SITE_URL}/blogs/${slug}`,
    changefreq: "monthly",
    priority: "0.7",
    lastmod: parseBlogDateToIso(date) || buildDate,
  };
});

const urls = [...staticRoutes, ...blogRoutes];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(`${rootDir}/public/sitemap.xml`, xml, "utf8");
console.log(
  `Generated sitemap with ${urls.length} URLs (${blogEntries.length} blogs).`
);
