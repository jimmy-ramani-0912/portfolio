// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import svgrPlugin from "vite-plugin-svgr";
// import envCompatible from "vite-plugin-env-compatible";
// const path = require("path");

// // https://vitejs.dev/config/
// export default defineConfig({
//   envPrefix: "REACT_APP_",
//   // This changes the out put dir from dist to build
//   // comment this out if that isn't relevant for your project
//   build: {
//     outDir: "build",
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
//   plugins: [
//     react(),
//     envCompatible(),
//     svgrPlugin({
//       svgrOptions: {
//         icon: true,
//         // ...svgr options (https://react-svgr.com/docs/options/)
//       },
//     }),
//   ],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@assets": "/src/assets",
      // "@components": "/src/components",
      // "@pages": "/src/pages",
    },
  },
  server: {
    host: true,
    port: 3001,
    watch: {
      usePolling: false,
    },
  },
});
