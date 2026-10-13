import { getCollection, render, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;
export type PostCard = { post: Post; minutesRead: number };

export const SITE = 'https://kiub.co';

const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

// Las fechas del frontmatter llegan como medianoche UTC: se formatean en UTC.
export const formatShort = (d: Date) =>
  `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()].slice(0, 3)} ${d.getUTCFullYear()}`;
export const formatLong = (d: Date) =>
  `${d.getUTCDate()} de ${MONTHS[d.getUTCMonth()]} de ${d.getUTCFullYear()}`;
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

export const postUrl = (post: Post) => `/blog/${post.data.slug}/`;
export const category = (post: Post) => post.data.tags[0];

/** Posts publicados en español, del más reciente al más antiguo. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) =>
    data.lang === 'es' && (import.meta.env.DEV || !data.draft),
  );
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || a.data.title.localeCompare(b.data.title));
}

export async function minutesRead(post: Post): Promise<number> {
  const { remarkPluginFrontmatter } = await render(post);
  return remarkPluginFrontmatter.minutesRead as number;
}

export async function toCards(posts: Post[]): Promise<PostCard[]> {
  return Promise.all(posts.map(async (post) => ({ post, minutesRead: await minutesRead(post) })));
}
