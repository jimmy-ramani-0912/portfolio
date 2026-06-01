import { Bio, skills, projects, blogs } from "../data/constants";

export const SITE_URL = "https://jimmy-ramani-0912.github.io/portfolio";
export const SITE_ORIGIN = "https://jimmy-ramani-0912.github.io";
export const SITE_PATH = "/portfolio";
export const SITE_NAME = `${Bio.name} Portfolio`;
export const AUTHOR_NAME = Bio.name;
export const LOCALE = "en_US";
export const LANGUAGE = "en";
export const COUNTRY = "IN";

export const DEFAULT_OG_IMAGE =
  "https://avatars.githubusercontent.com/u/138371306?v=4";
export const OG_IMAGE_WIDTH = 460;
export const OG_IMAGE_HEIGHT = 460;
export const OG_IMAGE_ALT = `${Bio.name} — Full Stack Developer portfolio photo`;

export const ROLES_LABEL = Bio.roles.join(", ");

export const DEFAULT_DESCRIPTION =
  "Full Stack Developer with 2.6+ years building scalable web applications and AI-enabled solutions using React.js, Next.js, Angular, and Node.js. Cloud, DevOps, and production-grade engineering.";

export const DEFAULT_TITLE = `${Bio.name} | Full Stack Developer & Software Engineer`;
export const DEFAULT_TITLE_TEMPLATE = `%s | ${Bio.name}`;

const skillNames = skills.flatMap((group) =>
  group.skills.map((item) => item.name)
);

export const KEYWORDS = [
  Bio.name,
  ...Bio.roles,
  "Full Stack Developer",
  "Software Engineer",
  "React.js",
  "Next.js",
  "Node.js",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Cloud",
  "DevOps",
  "AWS",
  "MongoDB",
  "Portfolio",
  "Web Developer",
  "India",
  ...skillNames.slice(0, 24),
]
  .filter(Boolean)
  .join(", ");

export const SAME_AS = [
  Bio.github,
  Bio.linkedin,
  Bio.medium,
  Bio.insta,
  Bio.codepen,
].filter(Boolean);

export const KNOWS_ABOUT = [
  ...Bio.roles,
  ...skillNames.slice(0, 20),
  "REST APIs",
  "CI/CD",
  "Scalable Architecture",
];

export const SITE_STATS = {
  projectCount: projects.length,
  blogCount: blogs.length,
};

export const resolveSiteUrl = (path = "/") => {
  if (!path || path === "/") {
    return `${SITE_URL}/`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
};

export const toAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }
  return resolveSiteUrl(path);
};

export const truncate = (text, max = 160) => {
  if (!text) {
    return "";
  }
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) {
    return clean;
  }
  return `${clean.slice(0, max - 1).trim()}…`;
};

export const stripHtml = (html = "") =>
  html
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&amp;|&quot;|&#39;|&lt;|&gt;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
