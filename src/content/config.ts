import { z, defineCollection } from 'astro:content'

const tags = ['CSS', 'TS', 'JS', 'VUE', 'GENERAL'] as const;
const tips = defineCollection({
  schema: z.object({
    title: z.string().max(60, 'For optimize SEO, please provide a title of 60 characters or less.'),
    description: z.string().max(160, 'For optimize SEO, please provide a description of 160 characters or less.'),
    image: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.enum(tags))
  })
})

export const collections = { tips }
