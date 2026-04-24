import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';

const site = 'https://tergarczechia.cz';

export default defineConfig({
  site,
  // Static build with on-demand routes for Keystatic admin + API endpoints.
  // Pages default to prerendered HTML; /keystatic/** and /api/** opt out
  // via `export const prerender = false`.
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: false },
    imageService: true,
    maxDuration: 30,
  }),
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
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    ],
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: { defaultLocale: 'cs', locales: { cs: 'cs-CZ', en: 'en-US' } },
      filter: (page) => !page.includes('/admin') && !page.includes('/api/'),
    }),
    preact({
      compat: false,
      include: [
        '**/nav/MobileMenu.tsx',
        '**/media/ConsentEmbed.tsx',
        '**/blog/CategoryFilter.tsx',
        '**/timer/MeditationTimer.tsx',
      ],
    }),
    react({
      include: [
        '**/events/EventFilter.tsx',
        '**/events/RegistrationForm.tsx',
        '**/groups/GroupsMap.tsx',
        '**/admin/**/*.tsx',
      ],
    }),
    keystatic(),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: { '@': new URL('./src', import.meta.url).pathname },
    },
  },
});
