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
      file: "./lib/hi-mom.esm.js",
      format: "esm",
      exports: "auto",
    },
    {
      file: "./lib/hi-mom.umd.js",
      format: "umd",
      exports: "auto",
      name: "hiMom",
    },
  ],
});
