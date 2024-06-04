import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  output: {
    distPath: {
      root: "./rsbuild-dist",
    },
    minify: false,
  },
  tools: {
    rspack: {
      optimization: {
        concatenateModules: true,
      },
    },
  },
});
