import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const SITE_URL = "https://jimmy-ramani-0912.github.io/portfolio";
const rootDir = fileURLToPath(new URL("..", import.meta.url));
const constantsPath = `${rootDir}/src/data/constants.js`;

const source = readFileSync(constantsPath, "utf8");
const blogsBlock = source.split("export const blogs = [")[1]?.split("];")[0] || "";
const blogIds = [...blogsBlock.matchAll(/^\s+id:\s*(\d+),/gm)].map((match) => match[1]);

const staticRoutes = [
  { loc: `${SITE_URL}/`, changefreq: "weekly", priority: "1.0" },
  { loc: `${SITE_URL}/projects`, changefreq: "weekly", priority: "0.9" },
  { loc: `${SITE_URL}/blogs`, changefreq: "weekly", priority: "0.85" },
];

const blogRoutes = blogIds.map((id) => ({
  loc: `${SITE_URL}/blogs/${id}`,
  changefreq: "monthly",
  priority: "0.7",
}));

const urls = [...staticRoutes, ...blogRoutes];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(`${rootDir}/public/sitemap.xml`, xml, "utf8");
console.log(`Generated sitemap with ${urls.length} URLs (${blogIds.length} blogs).`);
