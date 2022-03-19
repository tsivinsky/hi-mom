import { defineConfig } from "rollup";

export default defineConfig({
  input: "./index.js",
  output: [
    {
      file: "./lib/hi-mom.cjs",
      format: "cjs",
      exports: "auto",
    },
    {
      file: "./lib/hi-mom.js",
      format: "esm",
      exports: "auto",
    },
  ],
});
