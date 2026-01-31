import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Configure the `docs` collection for Starlight
export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
