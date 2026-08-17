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

/**
 * Projects (Case Studies) Collection
 * 
 * Structured case studies following a narrative format: Overview → Problem → 
 * Constraints → Approach → Key Decisions → Tech Stack → Impact → Learnings.
 * 
 * Features:
 * - Required narrative sections for consistent storytelling
 * - Key decisions with reasoning and alternatives
 * - Impact metrics (quantitative and qualitative)
 * - Featured flag for homepage showcase
 * - Optional custom order for manual curation
 * - Related project and decision slugs for cross-referencing
 */
const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    /** Project title */
    title: z.string(),
    
    /** Your role in the project */
    role: z.string(),
    
    /** Year the project was completed */
    year: z.number(),
    
    /** Project duration (e.g., "3 months", "1.5 years") */
    duration: z.string().optional(),
    
    /** Team size for scope context */
    teamSize: z.number().optional(),
    
    /** Brief summary of outcomes and impact */
    outcomeSummary: z.string(),

    /** Cover image path, relative to /public (e.g. "/cases/attribution.jpg") */
    coverImage: z.string().optional(),
    
    /** High-level project overview */
    overview: z.string(),
    
    /** Problem being addressed */
    problem: z.string(),
    
    /** Project constraints and limitations */
    constraints: z.array(z.string()),
    
    /** Solution approach and strategy */
    approach: z.string(),
    
    /** Key technical decisions with reasoning */
    keyDecisions: z.array(z.object({
      decision: z.string(),
      reasoning: z.string(),
      alternatives: z.array(z.string()).optional(),
    })),
    
    /** Technologies and frameworks used */
    techStack: z.array(z.string()),
    
    /** Project impact and results */
    impact: z.object({
      /** Quantitative metrics (optional) */
      metrics: z.array(z.object({
        label: z.string(),
        value: z.string(),
      })).optional(),
      /** Qualitative impact description */
      qualitative: z.string(),
    }),
    
    /** Key learnings and takeaways */
    learnings: z.array(z.string()),
    
    /** Whether to feature on homepage */
    featured: z.boolean().default(false),
    
    /** Project status */
    status: z.enum(['completed', 'ongoing', 'archived']).default('completed'),
    
    /** Custom sort order (lower numbers first) */
    order: z.number().optional(),
    
    /** Related project slugs for cross-referencing */
    relatedProjects: z.array(z.string()).optional(),
    
    /** Related decision slugs for cross-referencing */
    relatedDecisions: z.array(z.string()).optional(),
  }),
});

/**
 * Blog Collection (Unified)
 *
 * Unified blog collection combining decisions, articles, and talks.
 * Uses a `type` field to distinguish between different content types while sharing a common schema.
 *
 * Features:
 * - Three post types: decision (ADR), article (blog post), talk (presentation/podcast)
 * - Tags for categorization and filtering
 * - Draft mode for unpublished content
 * - Decision-specific fields: context, decision, alternatives, reasoning
 * - Talk-specific fields: event, location, talkType, slides, video, topics
 * - Article posts use standard blog fields
 * - CMS-ready: only the loader changes when migrating to a headless CMS
 */
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    /** Post title */
    title: z.string(),

    /** Post description for SEO and previews */
    description: z.string(),

    /** Original publication date */
    publishDate: z.coerce.date(),

    /** Last updated date (optional) */
    updatedDate: z.coerce.date().optional(),

    /** Post type: decision (ADR), article (blog), or talk (presentation/podcast) */
    type: z.enum(['decision', 'article', 'talk']),

    /** Tags for categorization and filtering (e.g., "decisions", "speaking", "architecture", "typescript") */
    tags: z.array(z.string()).default([]),

    /** Whether the post is a draft (hidden from production) */
    draft: z.boolean().default(false),

    /** Cover image path, relative to /public (e.g. "/blog/ga4-setup.jpg") */
    coverImage: z.string().optional(),

    // Decision-specific fields (required when type === 'decision', optional otherwise)
    /** Context and background for the decision */
    context: z.string().optional(),

    /** The decision that was made */
    decision: z.string().optional(),

    /** Alternative options considered */
    alternatives: z.array(z.object({
      option: z.string(),
      pros: z.array(z.string()).optional(),
      cons: z.array(z.string()).optional(),
    })).optional(),

    /** Reasoning behind the decision */
    reasoning: z.string().optional(),

    // Talk-specific fields (required when type === 'talk', optional otherwise)
    /** Event name */
    event: z.string().optional(),

    /** Event website URL (optional) */
    eventUrl: z.string().url().optional(),

    /** Location (city, country, or "Online") */
    location: z.string().optional(),

    /** Type of speaking engagement (talk-specific, different from post type) */
    talkType: z.enum(['conference', 'meetup', 'podcast', 'workshop', 'webinar']).optional(),

    /** Link to slides (optional) */
    slides: z.string().url().optional(),

    /** Link to video recording (optional) */
    video: z.string().url().optional(),

    /** Talk duration (e.g., "45 min", "1 hour") */
    duration: z.string().optional(),

    /** Topics covered in the talk */
    topics: z.array(z.string()).optional(),

    // Cross-references
    /** Related project slugs for cross-referencing */
    relatedProjects: z.array(z.string()).optional(),

    /** Related blog post slugs for cross-referencing */
    relatedPosts: z.array(z.string()).optional(),
  }),
});

/**
 * Journey Timeline Collection
 *
 * Career growth and learning progression timeline with milestones,
 * learning experiences, and career transitions.
 *
 * Features:
 * - Three entry types (milestone, learning, transition)
 * - Skills/technologies per entry
 * - Optional expandable content
 */
const journeyCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/journey' }),
  schema: z.object({
    /** Date of the timeline entry */
    date: z.coerce.date(),

    /** Entry title */
    title: z.string(),

    /** Type of timeline entry */
    type: z.enum(['milestone', 'learning', 'transition']),

    /** Brief description */
    description: z.string(),

    /** Skills or technologies associated with this entry */
    skills: z.array(z.string()).optional(),
  }),
});

/**
 * Resources Collection
 *
 * Curated list of books, podcasts, tools, services, and reading materials.
 * Replaces the old uses/ collection with individual resource files instead of arrays.
 *
 * Features:
 * - Five categories: podcasts, books, tools, services, reading
 * - Resource metadata (title, description, URL, author, year)
 * - Featured flag for highlighted resources
 * - Tags for additional categorization
 * - Custom order for intentional presentation
 * - CMS-ready design
 */
const resourcesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: z.object({
    /** Resource title */
    title: z.string(),

    /** Resource description */
    description: z.string(),

    /** Category for grouping */
    category: z.enum(['podcasts', 'books', 'tools', 'services', 'reading']),

    /** Resource URL (optional) */
    url: z.string().url().optional(),

    /** Author name (optional, useful for books) */
    author: z.string().optional(),

    /** Publication/release year (optional) */
    year: z.number().optional(),

    /** Whether to feature this resource */
    featured: z.boolean().default(false),

    /** Tags for additional categorization (e.g., "javascript", "design", "productivity") */
    tags: z.array(z.string()).optional(),

    /** Sort order within category */
    order: z.number().optional(),
  }),
});

/**
 * Testimonials Collection
 * 
 * Endorsements and recommendations from colleagues and clients.
 * 
 * Features:
 * - Person details (name, role, company)
 * - Relationship context
 * - Quote text
 * - Optional LinkedIn profile link
 * - Featured flag for homepage display
 */
const testimonialsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/testimonials' }),
  schema: z.object({
    /** Person's name */
    name: z.string(),
    
    /** Person's role/title */
    role: z.string(),
    
    /** Person's company */
    company: z.string(),
    
    /** Relationship context (e.g., "Worked together at Company X") */
    relationship: z.string(),
    
    /** Testimonial quote */
    quote: z.string(),
    
    /** LinkedIn profile URL (optional) */
    linkedin: z.string().url().optional(),
    
    /** Whether to feature on homepage */
    featured: z.boolean().default(false),
    
    /** Date of the testimonial */
    date: z.coerce.date(),
  }),
});

/**
 * Export all collections
 *
 * This object is used by Astro to register all content collections
 * and generate TypeScript types for type-safe content queries.
 */
export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
  journey: journeyCollection,
  resources: resourcesCollection,
  testimonials: testimonialsCollection,
};
