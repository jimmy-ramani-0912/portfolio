import { blogs } from "../data/constants";
import {
  assignBlogSlugs,
  parseBlogDateToIso,
  sanitizeBlogTitle,
} from "./blogSeo";

const slugById = assignBlogSlugs(
  blogs.map((blog) => ({ id: blog.id, title: blog.title }))
);

const slugToId = new Map(
  [...slugById.entries()].map(([id, slug]) => [slug, Number(id)])
);

export const getBlogSlug = (blog) =>
  slugById.get(String(blog.id)) || `blog-${blog.id}`;

export const getBlogPath = (blog) => `/portfolio/blogs/${getBlogSlug(blog)}`;

export const findBlogByRouteParam = (param) => {
  if (!param) {
    return null;
  }

  if (slugToId.has(param)) {
    const id = slugToId.get(param);
    return blogs.find((blog) => blog.id === id) || null;
  }

  if (/^\d+$/.test(param)) {
    return blogs.find((blog) => String(blog.id) === param) || null;
  }

  return null;
};

export const isLegacyNumericBlogParam = (param) => /^\d+$/.test(param || "");

export const getBlogSeoTitle = (blog) =>
  `${sanitizeBlogTitle(blog.title)} | Blog`;

export const getBlogDateIso = (blog) => parseBlogDateToIso(blog.date);
