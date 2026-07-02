import { copyFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const indexPath = `${rootDir}/dist/index.html`;
const notFoundPath = `${rootDir}/dist/404.html`;

if (!existsSync(indexPath)) {
  console.error("dist/index.html not found. Run vite build first.");
  process.exit(1);
}

copyFileSync(indexPath, notFoundPath);
console.log("Copied dist/index.html to dist/404.html for GitHub Pages SPA routing.");
