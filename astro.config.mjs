// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  // Base and site are required for proper GitHub Pages deployment
  base: '/DJing',
  site: 'https://sstreichan.github.io',
  integrations: [
    starlight({
      title: 'DJ-Anleitung',
      logo: {
        light: './src/assets/logo.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: false,
      },
      customCss: [
        // Inter font files
        '@fontsource/inter/400.css',
        '@fontsource/inter/600.css',
        '@fontsource/inter/700.css',
        // Custom theme styles
        './src/styles/custom.css',
      ],
      locales: {
        // Serve German as the root locale
        root: { label: 'Deutsch', lang: 'de' },
      },
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      pagefind: true,
      markdown: { headingLinks: true },
      // Use default expressiveCode and themes
    }),
  ],
});
