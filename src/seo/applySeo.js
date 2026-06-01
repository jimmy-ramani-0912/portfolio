const META_ATTR = "data-seo-managed";
const JSON_LD_ATTR = "data-seo-jsonld";

const upsertMeta = ({ name, property, content }) => {
  if (!content) {
    return;
  }
  const selector = name
    ? `meta[name="${name}"][${META_ATTR}]`
    : `meta[property="${property}"][${META_ATTR}]`;
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(META_ATTR, "true");
    if (name) {
      node.setAttribute("name", name);
    }
    if (property) {
      node.setAttribute("property", property);
    }
    document.head.appendChild(node);
  }
  node.setAttribute("content", content);
};

const upsertLink = ({ rel, href, hreflang }) => {
  if (!href) {
    return;
  }
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"][${META_ATTR}]`
    : `link[rel="${rel}"][${META_ATTR}]`;
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("link");
    node.setAttribute(META_ATTR, "true");
    node.setAttribute("rel", rel);
    if (hreflang) {
      node.setAttribute("hreflang", hreflang);
    }
    document.head.appendChild(node);
  }
  node.setAttribute("href", href);
};

const clearJsonLd = () => {
  document.head
    .querySelectorAll(`script[${JSON_LD_ATTR}]`)
    .forEach((node) => node.remove());
};

const injectJsonLd = (schemas = []) => {
  clearJsonLd();
  schemas.filter(Boolean).forEach((schema) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute(JSON_LD_ATTR, "true");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
};

export const applySeo = ({
  title,
  description,
  keywords,
  canonical,
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  ogType = "website",
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  ogImageAlt,
  ogImageWidth,
  ogImageHeight,
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  twitterImageAlt,
  jsonLd = [],
}) => {
  if (title) {
    document.title = title;
  }

  upsertMeta({ name: "description", content: description });
  upsertMeta({ name: "keywords", content: keywords });
  upsertMeta({ name: "robots", content: robots });
  upsertMeta({ name: "googlebot", content: robots });
  upsertMeta({ name: "author", content: "Jimmy Ramani" });
  upsertMeta({ name: "publisher", content: "Jimmy Ramani" });

  upsertLink({ rel: "canonical", href: canonical });
  upsertLink({ rel: "alternate", href: canonical, hreflang: "en" });
  upsertLink({ rel: "alternate", href: canonical, hreflang: "x-default" });

  upsertMeta({ property: "og:type", content: ogType });
  upsertMeta({ property: "og:site_name", content: "Jimmy Ramani Portfolio" });
  upsertMeta({ property: "og:locale", content: "en_US" });
  upsertMeta({ property: "og:title", content: ogTitle || title });
  upsertMeta({ property: "og:description", content: ogDescription || description });
  upsertMeta({ property: "og:url", content: ogUrl || canonical });
  upsertMeta({ property: "og:image", content: ogImage });
  upsertMeta({ property: "og:image:secure_url", content: ogImage });
  upsertMeta({ property: "og:image:alt", content: ogImageAlt });
  upsertMeta({ property: "og:image:width", content: String(ogImageWidth || 1200) });
  upsertMeta({ property: "og:image:height", content: String(ogImageHeight || 630) });

  upsertMeta({ name: "twitter:card", content: twitterCard });
  upsertMeta({ name: "twitter:title", content: twitterTitle || ogTitle || title });
  upsertMeta({
    name: "twitter:description",
    content: twitterDescription || ogDescription || description,
  });
  upsertMeta({ name: "twitter:image", content: twitterImage || ogImage });
  upsertMeta({ name: "twitter:image:alt", content: twitterImageAlt || ogImageAlt });
  upsertMeta({ name: "twitter:creator", content: "@jim_y0912" });
  upsertMeta({ name: "twitter:site", content: "@jim_y0912" });

  injectJsonLd(jsonLd);
};
