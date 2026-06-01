import { blogs } from "../data/constants";
import { applySeo } from "./applySeo";
import {
  buildBlogDetailSchemas,
  buildBlogsSchemas,
  buildHomeSchemas,
  buildProjectsSchemas,
} from "./jsonLd";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  KEYWORDS,
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  ROLES_LABEL,
  truncate,
  resolveSiteUrl,
  stripHtml,
  toAbsoluteUrl,
} from "./siteConfig";

const normalizePath = (pathname = "") => {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/portfolio") {
    return "/";
  }
  if (path.startsWith("/portfolio/")) {
    return path.slice("/portfolio".length) || "/";
  }
  if (path.startsWith("/portfolio")) {
    return path.slice("/portfolio".length) || "/";
  }
  return path;
};

const buildBaseSeo = ({
  title,
  description,
  canonicalPath,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = OG_IMAGE_ALT,
  jsonLd = [],
}) => {
  const canonical = resolveSiteUrl(canonicalPath);
  return {
    title,
    description,
    keywords: KEYWORDS,
    canonical,
    ogType,
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonical,
    ogImage,
    ogImageAlt,
    ogImageWidth: OG_IMAGE_WIDTH,
    ogImageHeight: OG_IMAGE_HEIGHT,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
    twitterImageAlt: ogImageAlt,
    jsonLd,
  };
};

export const resolvePageSeo = (pathname) => {
  const path = normalizePath(pathname);

  if (path === "/projects") {
    const description = truncate(
      `Explore ${ROLES_LABEL} projects by Jimmy Ramani — production web apps, mobile apps, and full-stack solutions built with React, Node.js, Flutter, and cloud technologies.`
    );
    const title = "Projects | Full Stack Developer Portfolio";
    const url = resolveSiteUrl("/projects");
    return buildBaseSeo({
      title,
      description,
      canonicalPath: "/projects",
      jsonLd: buildProjectsSchemas({ url, description }),
    });
  }

  if (path === "/blogs") {
    const description = truncate(
      "Technical blogs and articles on JavaScript, React, Next.js, frontend architecture, design patterns, and modern web development by Jimmy Ramani."
    );
    const title = "Blogs | JavaScript & Web Development Articles";
    const url = resolveSiteUrl("/blogs");
    return buildBaseSeo({
      title,
      description,
      canonicalPath: "/blogs",
      jsonLd: buildBlogsSchemas({ url, description }),
    });
  }

  const blogMatch = path.match(/^\/blogs\/(\d+)$/);
  if (blogMatch) {
    const blog = blogs.find((item) => String(item.id) === blogMatch[1]);
    if (blog) {
      const plain = stripHtml(blog.HTML || "");
      const description = truncate(
        blog.description?.trim() ||
          plain ||
          `${blog.title} — article by Jimmy Ramani on ${blog.category || "web development"}.`
      );
      const title = `${blog.title} | Blog`;
      const ogImage = toAbsoluteUrl(blog.image || DEFAULT_OG_IMAGE);
      return buildBaseSeo({
        title,
        description,
        canonicalPath: `/blogs/${blog.id}`,
        ogType: "article",
        ogImage,
        ogImageAlt: `${blog.title} cover image`,
        jsonLd: buildBlogDetailSchemas({ ...blog, description }),
      });
    }
  }

  const description = truncate(DEFAULT_DESCRIPTION);
  const title = DEFAULT_TITLE;
  const url = resolveSiteUrl("/");
  return buildBaseSeo({
    title,
    description,
    canonicalPath: "/",
    jsonLd: buildHomeSchemas({ url, description }),
  });
};

export const syncPageSeo = (pathname) => {
  applySeo(resolvePageSeo(pathname));
};
