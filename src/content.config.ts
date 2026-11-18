import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Schemas follow CLAUDE.md section 6. If a .md file breaks one, `npm run build` fails with the reason.

const writeups = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writeups' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    platform: z.enum(['HackTheBox', 'TryHackMe', 'CTF', 'Lab propio', 'Otro']),
    difficulty: z.enum(['Fácil', 'Media', 'Difícil', 'Insana']),
    tags: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    summary: z.string().max(160, 'El resumen debe tener 160 caracteres o menos'),
    draft: z.boolean().default(false),
  }),
});

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()).default([]),
    date: z.coerce.date(),
    repo: z.url().optional(),
    demo: z.url().optional(),
    featured: z.boolean().default(false),
  }),
});

const certificaciones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/certificaciones' }),
  schema: z.object({
    name: z.string(),
    issuer: z.string(),
    date: z.coerce.date(),
    status: z.enum(['obtenida', 'en curso']),
    credentialUrl: z.url().optional(),
  }),
});

const notas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notas' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
  }),
});

export const collections = { writeups, proyectos, certificaciones, notas };
