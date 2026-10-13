// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime, remarkBlogFaq, rehypeChecklist } from './src/lib/markdown.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://kiub.co',
  trailingSlash: 'always',
  integrations: [react(), sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkBlogFaq],
    rehypePlugins: [rehypeChecklist],
  },
});
