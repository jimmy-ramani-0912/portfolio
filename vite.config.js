import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import envCompatible from "vite-plugin-env-compatible";
import path from "path";

export default defineConfig({
  base: "/portfolio/",
  envPrefix: "REACT_APP_",
  esbuild: {
    loader: "jsx",
  },
  // build: {
  //   outDir: "build",
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  plugins: [
    react(),
    envCompatible(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
