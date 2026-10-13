import rss from '@astrojs/rss';
import { getPosts, postUrl } from '../lib/blog';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: 'Blog de kiub',
    description: 'Costos reales, ejemplos prácticos y guías honestas sobre software a la medida, automatización y sitios web para pymes en Costa Rica.',
    site: context.site,
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: postUrl(post),
      categories: post.data.tags,
    })),
    customData: '<language>es-cr</language>',
  });
}
