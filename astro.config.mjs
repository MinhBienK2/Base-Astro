// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: node({
    mode: 'standalone',
  }),
  site: 'http://localhost:4321',
  integrations: [sitemap()],

  redirects: {
    '/': '/en',
  },
});
