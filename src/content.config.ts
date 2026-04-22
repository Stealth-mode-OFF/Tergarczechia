import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const seo = z
  .object({
    title: z.string().max(65).optional(),
    description: z.string().max(170).optional(),
    ogImage: z.string().optional(),
    noindex: z.boolean().default(false),
  })
  .optional();

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      perex: z.string().max(320),
      category: z.enum(['jak-meditovat', 'veda', 'komunita', 'udalosti']),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      author: reference('teachers').optional(),
      thumbnail: image().optional(),
      thumbnailRemote: z.string().url().optional(),
      youtubeId: z.string().optional(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      locale: z.enum(['cs', 'en']).default('cs'),
      seo,
    }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/events' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      dateStart: z.coerce.date(),
      dateEnd: z.coerce.date().optional(),
      type: z.enum(['online', 'prezencni', 'prenos', 'hybridni']),
      audience: z.enum(['zacatecnici', 'zkuseni', 'vsichni']).default('vsichni'),
      description: z.string(),
      body: z.string().optional(),
      location: z
        .object({
          name: z.string().optional(),
          city: z.string().optional(),
          address: z.string().optional(),
          lat: z.number().optional(),
          lng: z.number().optional(),
        })
        .optional(),
      teachers: z.array(reference('teachers')).default([]),
      pathStep: reference('path').optional(),
      registrationUrl: z.string().url().optional(),
      price: z.string().optional(),
      free: z.boolean().default(false),
      capacity: z.number().int().optional(),
      image: image().optional(),
      imageRemote: z.string().url().optional(),
      featured: z.boolean().default(false),
      status: z.enum(['planovana', 'probiha', 'skoncila', 'zrusena']).default('planovana'),
      locale: z.enum(['cs', 'en']).default('cs'),
      seo,
    }),
});

const path = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/path' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      level: z.number().int(),
      status: z.enum(['dostupne', 'brzy', 'vyzaduje-predchozi']),
      statusLabel: z.string().optional(),
      prerequisite: reference('path').optional(),
      externalUrl: z.string().url().optional(),
      color: z.string().regex(/^#[0-9a-f]{6}$/i),
      durationHours: z.number().optional(),
      image: image().optional(),
      seo,
    }),
});

const teachers = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/teachers' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      portrait: image().optional(),
      email: z.string().email().optional(),
      website: z.string().url().optional(),
      languages: z.array(z.string()).default(['cs']),
      order: z.number().default(0),
      seo,
    }),
});

const groups = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/groups' }),
  schema: z.object({
    name: z.string(),
    language: z.enum(['cs', 'en']).default('cs'),
    city: z.string(),
    schedule: z.string(),
    address: z.string().optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
    coordinator: reference('teachers').optional(),
    contactEmail: z.string().email().optional(),
    registrationUrl: z.string().url().optional(),
    color: z.string().optional(),
    active: z.boolean().default(true),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/resources' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      kind: z.enum(['video', 'kniha', 'clanek', 'podcast', 'meditace-audio']),
      description: z.string(),
      url: z.string().url().optional(),
      youtubeId: z.string().optional(),
      thumbnail: image().optional(),
      thumbnailRemote: z.string().url().optional(),
      language: z.enum(['cs', 'en']).default('cs'),
      author: reference('teachers').optional(),
      category: z.enum(['jak-meditovat', 'veda', 'komunita', 'udalosti', 'uceni']).default('uceni'),
      publishedAt: z.coerce.date().optional(),
      duration: z.string().optional(),
      featured: z.boolean().default(false),
    }),
});

const glossary = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/glossary' }),
  schema: z.object({
    term: z.string(),
    termSanskrit: z.string().optional(),
    termTibetan: z.string().optional(),
    pronunciation: z.string().optional(),
    shortDef: z.string().max(220),
    related: z.array(reference('glossary')).default([]),
    relatedArticles: z.array(reference('blog')).default([]),
    seo,
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    section: z.enum(['obecne', 'programy', 'meditace', 'skupiny', 'daru']).default('obecne'),
    order: z.number().default(0),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      heroImage: image().optional(),
      heroText: z.string().optional(),
      seo,
    }),
});

export const collections = { blog, events, path, teachers, groups, resources, glossary, faq, pages };
