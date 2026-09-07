/**
 * Page Metadata Configuration
 * 
 * Centralized SEO metadata for all static pages. Single source of truth
 * for titles and descriptions to ensure consistency across the site.
 * 
 * Usage:
 * ```astro
 * ---
 * import BaseLayout from '../layouts/BaseLayout.astro';
 * import SEO from '../components/SEO.astro';
 * import { pagesConfig } from '../pages.config';
 * ---
 * 
 * <BaseLayout>
 *   <SEO 
 *     slot="head"
 *     title={pagesConfig.projects.title}
 *     description={pagesConfig.projects.description}
 *   />
 *   <!-- Page content -->
 * </BaseLayout>
 * ```
 * 
 * @module pages.config
 */
interface PageMeta {
  title: string;
  
  description: string;
  
  heading?: string;
  
  intro?: string;
}
export const pagesConfig = {
  home: {
    title: 'Home',
    description: 'Marketer and newsletter founder exploring the intersection of AI and modern marketing. Case studies, frameworks, and lessons from the field.',
  },
  projects: {
    title: 'Projects - Marketing Case Studies',
    description: 'Detailed case studies showcasing how I approach marketing challenges, apply AI-powered strategies, and deliver measurable growth outcomes.',
    heading: 'Projects',
    intro: 'Case studies that show how I approach marketing problems — from diagnosing the constraint to choosing the right channel mix, building AI-powered systems, and measuring what actually moved the needle.',
  },
  blog: {
    title: 'Blog & Insights',
    description: 'Articles, decisions, and talks on marketing strategy, AI integration, and building with intention.',
    heading: 'Blog',
    intro: 'Experiments with real data, honest tool verdicts, and the strategy decisions behind them. Each post documents what I tried, what worked, and what I\'d do differently.',
  },
  journey: {
    title: 'Journey - Career Growth & Learning Timeline',
    description: 'A chronological timeline of my professional journey — from early marketing experiments to founding a newsletter at the intersection of AI and modern marketing.',
    heading: 'Journey',
    intro: 'This isn\'t a resume — it\'s the honest story of how I\'ve grown as a marketer. The experiments that failed, the newsletters that took off, and the frameworks I\'ve built from first principles along the way.',
  },
  stuffILike: {
    title: 'Stuff I Like - Curated Resources',
    description: 'A curated collection of books, podcasts, tools, services, and resources I recommend and use.',
    heading: 'Stuff I Like',
    intro: 'A curated collection of tools, books, podcasts, services, and reading materials I use and recommend. Everything here has earned a place in my workflow.',
  },
  contact: {
    title: 'Contact - Get in Touch',
    description: 'Get in touch to discuss brand collaborations, newsletter sponsorships, consulting, or just to say hi.',
    heading: 'Let\'s Talk',
  },
} as const;
export type PagesConfig = typeof pagesConfig;
export type PageConfig = PageMeta;
