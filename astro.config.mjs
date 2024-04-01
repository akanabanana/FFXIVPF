import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import pagefind from "astro-pagefind";
import mdx from "@astrojs/mdx";
import { fileURLToPath } from "url";
import path from "path";
import sectionize from "@hbsnow/rehype-sectionize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { transformerNotationDiff } from "@shikijs/transformers";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeSlug from "rehype-slug";

const projectRootDir = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), mdx(), pagefind()],
  markdown: {
    remarkPlugins: [sectionize],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
    ],
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