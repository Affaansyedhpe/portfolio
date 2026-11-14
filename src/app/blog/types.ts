import { z } from 'zod';

export const blogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  source: z.string().optional(),
  content: z.string(),
  url: z.string().url(),
  publishedAt: z.string(),
  heroImage: z.string().url().optional(),
  author: z.object({
    name: z.string(),
    handle: z.string(),
    avatar: z.string().url().optional()
  })
});

export type BlogPost = z.infer<typeof blogPostSchema>;
