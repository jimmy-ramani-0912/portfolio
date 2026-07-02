import { Bio } from "../data/constants";
import { getBlogDateIso, getBlogSeoTitle, getBlogSlug } from "../utils/blogIndex";
import {
  AUTHOR_NAME,
  DEFAULT_OG_IMAGE,
  KNOWS_ABOUT,
  LOCALE,
  ROLES_LABEL,
  SAME_AS,
  SITE_NAME,
  SITE_STATS,
  SITE_URL,
  resolveSiteUrl,
  toAbsoluteUrl,
} from "./siteConfig";

export const buildPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: AUTHOR_NAME,
  url: `${SITE_URL}/`,
  image: DEFAULT_OG_IMAGE,
  jobTitle: ROLES_LABEL,
  description: Bio.description.lead,
  sameAs: SAME_AS,
  knowsAbout: KNOWS_ABOUT,
  worksFor: {
    "@type": "Organization",
    name: "Softrefine Technology Pvt. Ltd.",
  },
});

export const buildWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  inLanguage: LOCALE,
  description: Bio.description.lead,
  publisher: {
    "@id": `${SITE_URL}/#person`,
  },
  author: {
    "@id": `${SITE_URL}/#person`,
  },
});

export const buildProfilePageSchema = ({ url, description }) => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${url}#webpage`,
  url,
  name: `${AUTHOR_NAME} | Portfolio`,
  description,
  inLanguage: LOCALE,
  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },
  about: {
    "@id": `${SITE_URL}/#person`,
  },
  mainEntity: {
    "@id": `${SITE_URL}/#person`,
  },
});

export const buildWebPageSchema = ({ url, name, description, type = "WebPage" }) => ({
  "@context": "https://schema.org",
  "@type": type,
  "@id": `${url}#webpage`,
  url,
  name,
  description,
  inLanguage: LOCALE,
  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },
  author: {
    "@id": `${SITE_URL}/#person`,
  },
});

export const buildCollectionPageSchema = ({ url, name, description, itemCount }) => ({
  ...buildWebPageSchema({ url, name, description, type: "CollectionPage" }),
  numberOfItems: itemCount,
});

export const buildBlogPostingSchema = (blog) => {
  const slug = getBlogSlug(blog);
  const url = resolveSiteUrl(`/blogs/${slug}`);
  const seoTitle = getBlogSeoTitle(blog).replace(/ \| Blog$/, "");
  const description =
    blog.description?.trim() ||
    `${seoTitle} — technical article by ${AUTHOR_NAME} on JavaScript, React, and modern web development.`;
  const datePublished = getBlogDateIso(blog);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: seoTitle,
    name: seoTitle,
    description,
    url,
    mainEntityOfPage: url,
    image: toAbsoluteUrl(blog.image || DEFAULT_OG_IMAGE),
    ...(datePublished ? { datePublished } : {}),
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: `${SITE_URL}/`,
    },
    publisher: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: DEFAULT_OG_IMAGE,
      },
    },
    articleSection: blog.category || "Technology",
    inLanguage: LOCALE,
    isPartOf: {
      "@id": `${resolveSiteUrl("/blogs")}#webpage`,
    },
  };
};

export const buildBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const buildHomeSchemas = ({ url, description }) => [
  buildPersonSchema(),
  buildWebSiteSchema(),
  buildProfilePageSchema({ url, description }),
  buildBreadcrumbSchema([{ name: "Home", url }]),
];

export const buildProjectsSchemas = ({ url, description }) => [
  buildWebSiteSchema(),
  buildCollectionPageSchema({
    url,
    name: "Projects",
    description,
    itemCount: SITE_STATS.projectCount,
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Projects", url },
  ]),
];

export const buildBlogsSchemas = ({ url, description }) => [
  buildWebSiteSchema(),
  buildCollectionPageSchema({
    url,
    name: "Blogs",
    description,
    itemCount: SITE_STATS.blogCount,
  }),
  buildBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Blogs", url },
  ]),
];

export const buildBlogDetailSchemas = (blog) => {
  const slug = getBlogSlug(blog);
  const url = resolveSiteUrl(`/blogs/${slug}`);
  const seoTitle = getBlogSeoTitle(blog).replace(/ \| Blog$/, "");
  const description = blog.description?.trim() || seoTitle;

  return [
    buildWebSiteSchema(),
    buildBlogPostingSchema(blog),
    buildBreadcrumbSchema([
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Blogs", url: resolveSiteUrl("/blogs") },
      { name: seoTitle, url },
    ]),
  ];
};
