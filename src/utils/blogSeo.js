export const sanitizeBlogTitle = (title = "") =>
  title
    .normalize("NFKC")
    .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "")
    .replace(/[^\p{L}\p{N}\s.'&/-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

export const slugifyTitle = (title = "") =>
  sanitizeBlogTitle(title)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);

export const parseBlogDateToIso = (date = "") => {
  if (!date) {
    return null;
  }

  const trimmed = date.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return trimmed;
  }

  const months = {
    jan: "01",
    feb: "02",
    mar: "03",
    apr: "04",
    may: "05",
    jun: "06",
    jul: "07",
    aug: "08",
    sep: "09",
    oct: "10",
    nov: "11",
    dec: "12",
  };

  const longMatch = trimmed.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
  if (longMatch) {
    const month = months[longMatch[2].slice(0, 3).toLowerCase()];
    if (month) {
      return `${longMatch[3]}-${month}-${longMatch[1].padStart(2, "0")}`;
    }
  }

  const shortMatch = trimmed.match(/^(\d{1,2})\s+([A-Za-z]{3,})\s+(\d{4})$/);
  if (shortMatch) {
    const month = months[shortMatch[2].slice(0, 3).toLowerCase()];
    if (month) {
      return `${shortMatch[3]}-${month}-${shortMatch[1].padStart(2, "0")}`;
    }
  }

  return null;
};

export const assignBlogSlugs = (blogEntries) => {
  const used = new Set();
  const slugById = new Map();

  blogEntries.forEach(({ id, title }) => {
    let slug = slugifyTitle(title);
    if (!slug) {
      slug = `blog-${id}`;
    }

    let candidate = slug;
    if (used.has(candidate)) {
      candidate = `${slug}-${id}`;
    }

    used.add(candidate);
    slugById.set(String(id), candidate);
  });

  return slugById;
};

export const parseBlogsFromConstantsSource = (source) => {
  const blogsBlock =
    source.split("export const blogs = [")[1]?.split("];")[0] || "";
  const entries = [];
  const objectMatches = [
    ...blogsBlock.matchAll(
      /\{\s*\n\s+id:\s*(\d+),([\s\S]*?)(?=\n\s+\},?\s*(?:\n\s+\{|$))/g
    ),
  ];

  objectMatches.forEach((match) => {
    const id = match[1];
    const block = match[2];

    let title = "";
    const titleInline = block.match(/title:\s*"([^"]*)"/);
    const titleNextLine = block.match(/title:\s*\n\s*"([^"]+)"/);
    if (titleInline?.[1]) {
      title = titleInline[1];
    } else if (titleNextLine?.[1]) {
      title = titleNextLine[1];
    }

    const dateMatch = block.match(/date:\s*"([^"]+)"/);
    entries.push({ id, title, date: dateMatch?.[1] || "" });
  });

  return entries;
};
