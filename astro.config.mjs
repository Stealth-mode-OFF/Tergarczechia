import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';

const site = 'https://tergarczechia.cz';

export default defineConfig({
  site,
  output: 'static',
  adapter: cloudflare({ platformProxy: { enabled: true }, imageService: 'compile' }),
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  trailingSlash: 'never',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en'],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: { defaultLocale: 'cs', locales: { cs: 'cs-CZ', en: 'en-US' } },
      filter: (page) => !page.includes('/admin') && !page.includes('/api/'),
    }),
    preact({ compat: false, include: ['**/nav/*.tsx', '**/preact/*.tsx', '**/islands/preact/*.tsx'] }),
    react({ include: ['**/admin/*.tsx', '**/react/*.tsx', '**/islands/react/*.tsx'] }),
    keystatic(),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: { '@': new URL('./src', import.meta.url).pathname },
    },
  },
});
