/**
 * Content Collections Configuration
 *
 * Defines all content collections for the site with their schemas and validation rules.
 * Uses Astro's Content Collections API with Zod for type-safe content management.
 *
 * Collections:
 * - projects: Case studies with structured narrative format
 * - blog: Unified blog collection (decisions, articles, talks with type field)
 * - journey: Career timeline entries
 * - resources: Curated books, podcasts, tools, services, and reading materials
 * - testimonials: Endorsements and recommendations
 *
 * All collections use the glob loader to read Markdown files (.md, with .mdx still
 * accepted) from their respective directories. Content is authored as plain .md so
 * that Obsidian can open src/content/ directly as a vault — Obsidian does not
 * recognise the .mdx extension. Only switch a file to .mdx if it genuinely needs
 * to import a component.
 * Schemas enforce data structure and provide TypeScript types throughout the application.
 * Schema is designed to be CMS-agnostic: only the loader changes when migrating to a headless CMS.
 *
 * @module content.config
 */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    
    role: z.string(),
    
    year: z.number(),
    
    duration: z.string().optional(),
    
    teamSize: z.number().optional(),
    
    outcomeSummary: z.string(),

    coverImage: z.string().optional(),
    
    overview: z.string(),
    
    problem: z.string(),
    
    constraints: z.array(z.string()),
    
    approach: z.string(),
    
    keyDecisions: z.array(z.object({
      decision: z.string(),
      reasoning: z.string(),
      alternatives: z.array(z.string()).optional(),
    })),
    
    techStack: z.array(z.string()),
    
    impact: z.object({
      metrics: z.array(z.object({
        label: z.string(),
        value: z.string(),
      })).optional(),
      qualitative: z.string(),
    }),
    
    learnings: z.array(z.string()),
    
    outcomeHighlight: z.string().optional(),

    featured: z.boolean().default(false),

    status: z.enum(['completed', 'ongoing', 'archived']).default('completed'),
    
    order: z.number().optional(),
    
    relatedProjects: z.array(z.string()).optional(),
    
    relatedDecisions: z.array(z.string()).optional(),
  }),
});
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),

    description: z.string(),

    publishDate: z.coerce.date(),

    updatedDate: z.coerce.date().optional(),

    type: z.enum(['experiment', 'tool-verdict', 'decision', 'talk']),

    tags: z.array(z.string()).default([]),

    draft: z.boolean().default(false),

    coverImage: z.string().optional(),

    // Decision-specific fields (required when type === 'decision', optional otherwise)
    context: z.string().optional(),

    decision: z.string().optional(),

    alternatives: z.array(z.object({
      option: z.string(),
      pros: z.array(z.string()).optional(),
      cons: z.array(z.string()).optional(),
    })).optional(),

    reasoning: z.string().optional(),

    // Talk-specific fields (required when type === 'talk', optional otherwise)
    event: z.string().optional(),

    eventUrl: z.string().url().optional(),

    location: z.string().optional(),

    talkType: z.enum(['conference', 'meetup', 'podcast', 'workshop', 'webinar']).optional(),

    slides: z.string().url().optional(),

    video: z.string().url().optional(),

    duration: z.string().optional(),

    topics: z.array(z.string()).optional(),

    // Cross-references
    relatedProjects: z.array(z.string()).optional(),

    relatedPosts: z.array(z.string()).optional(),
  }),
});
const journeyCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/journey' }),
  schema: z.object({
    date: z.coerce.date(),

    title: z.string(),

    type: z.enum(['milestone', 'learning', 'transition']),

    description: z.string(),

    skills: z.array(z.string()).optional(),
  }),
});
const resourcesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),

    description: z.string(),

    category: z.enum(['podcasts', 'books', 'tools', 'services', 'reading']),

    url: z.string().url().optional(),

    author: z.string().optional(),

    year: z.number().optional(),

    featured: z.boolean().default(false),

    tags: z.array(z.string()).optional(),

    order: z.number().optional(),
  }),
});
const testimonialsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    
    role: z.string(),
    
    company: z.string(),
    
    relationship: z.string(),
    
    quote: z.string(),
    
    linkedin: z.string().url().optional(),
    
    featured: z.boolean().default(false),
    
    date: z.coerce.date(),
  }),
});
export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
  journey: journeyCollection,
  resources: resourcesCollection,
  testimonials: testimonialsCollection,
};
