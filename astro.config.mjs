// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'DJ-Anleitung',
      defaultLocale: 'de',
      locales: {
        // Serve German as the root locale
        root: { label: 'Deutsch', lang: 'de' },
      },
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      pagefind: true,
      editLink: false,
      // Keep defaults for logo/social; no custom logo or social links
      markdown: { headingLinks: true },
      // Use default expressiveCode and themes
    }),
  ],
});
