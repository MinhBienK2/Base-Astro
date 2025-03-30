// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: node({
    mode: 'standalone',
  }),
  site: 'http://localhost:4321',
  integrations: [sitemap(), react(), astroI18next()],

  // redirects: {
  //   '/': '/en',
  // },
});
