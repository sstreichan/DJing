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
      // Use Starlight's default sidebar generation from the `docs` collection
    }),
  ],
});
