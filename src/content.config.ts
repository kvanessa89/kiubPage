import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: ['**/*.{md,mdx}', '!**/README.md'], base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string().max(90),
    seoTitle: z.string().max(60).optional(), // <title> y og:title; obligatorio si title pasa de 60
    description: z.string().min(140).max(160),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('Carol Hernández'),
    tags: z.array(z.string()).min(1).max(5),
    cover: image(),
    coverAlt: z.string().min(10),           // obligatorio: nunca alt vacío
    canonical: z.string().url().optional(), // por defecto https://kiub.co/blog/<slug>/
    lang: z.enum(['es', 'en']).default('es'),
    translationOf: z.string().optional(),   // slug de la versión en el otro idioma, si existe
    draft: z.boolean().default(false),
    featured: z.boolean().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    related: z.array(z.string()).optional(), // slugs
  }).refine((d) => d.title.length <= 60 || d.seoTitle, {
    message: 'title de más de 60 caracteres: agrega seoTitle (≤ 60)',
    path: ['seoTitle'],
  }),
});

export const collections = { blog };
