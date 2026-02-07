// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://sstreichan.github.io",
  base: "/DJing",
  integrations: [
    starlight({
      title: "DJ-Anleitung",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/sstreichan/DJing",
        },
      ],
      sidebar: [
        {
          label: "Inhalt",
          autogenerate: { directory: "docs" },
        },
      ],
    }),
  ],
});
