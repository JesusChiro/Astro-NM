import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://nmtelecom.pe",
  integrations: [tailwind(), sitemap(), robotsTxt(), purgecss({
    fontFace: true,
    keyframes: true,
    safelist: ['random', 'yep', 'button', /^nav-/],
    blocklist: ['usedClass', /^nav-/],
    content: [
      process.cwd() + '/src/**/*.{astro,vue}' // Watching astro and vue sources (for SSR, read the note below)
    ],
    extractors: [
      {
        // Example using a taiwindcss compatible class extractor
        extractor: (content) =>
          content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
        extensions: ['astro', 'html']
      }
    ]
  })]
});