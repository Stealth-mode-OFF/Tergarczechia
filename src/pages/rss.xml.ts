import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog')).filter((p) => !p.data.draft);
  posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return rss({
    title: 'Tergar Česko — Zdroje',
    description: 'Nové články, videa a návody z českého Tergar.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.perex,
      link: `/zdroje/${post.id}`,
      categories: [post.data.category],
    })),
    customData: '<language>cs-cz</language>',
  });
}
