import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import pagefind from "astro-pagefind";
import mdx from "@astrojs/mdx";
import { fileURLToPath } from "url";
import path from "path";
import sectionize from "@hbsnow/rehype-sectionize";
import { transformerNotationDiff } from "@shikijs/transformers";

const projectRootDir = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), mdx(), pagefind()],
  markdown: {
    remarkPlugins: [sectionize],
    shikiConfig: {
      wrap: true,
      transformers: [transformerNotationDiff()],
    },
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(projectRootDir, "src"),
      },
    },
  },
});