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

/**
 * Page metadata interface
 */
interface PageMeta {
  /** Page title (used in browser tab and SEO) */
  title: string;
  
  /** Page description (used in meta tags and SEO) */
  description: string;
  
  /** Page heading (displayed as h1, optional - defaults to title) */
  heading?: string;
  
  /** Page intro text (displayed below heading, optional) */
  intro?: string;
}

/**
 * Pages configuration object
 * 
 * Contains metadata for all static pages. Dynamic pages (like individual
 * project or article pages) generate their own metadata from content.
 */
export const pagesConfig = {
  /**
   * Home page (/)
   * Note: Home page uses siteConfig for title/description as it represents the site itself
   */
  home: {
    title: 'Home',
    description: 'Marketer and newsletter founder exploring the intersection of AI and modern marketing. Case studies, frameworks, and lessons from the field.',
  },
  
  /**
   * Projects listing page (/projects)
   */
  projects: {
    title: 'Projects - Marketing Case Studies',
    description: 'Detailed case studies showcasing how I approach marketing challenges, apply AI-powered strategies, and deliver measurable growth outcomes.',
    heading: 'Projects',
    intro: 'Case studies that show how I approach marketing problems — from diagnosing the constraint to choosing the right channel mix, building AI-powered systems, and measuring what actually moved the needle.',
  },
  
  /**
   * Blog listing page (/blog)
   * Unified blog collection (decisions, articles, talks)
   */
  blog: {
    title: 'Blog & Insights',
    description: 'Articles, decisions, and talks on marketing strategy, AI integration, and building with intention.',
    heading: 'Blog',
    intro: 'Thoughts on marketing, strategy decisions, and lessons learned. Decisions document the choices I\'ve made and why. Articles explore frameworks and strategies. Talks share my thinking on stage.',
  },

  /**
   * Journey timeline page (/journey)
   */
  journey: {
    title: 'Journey - Career Growth & Learning Timeline',
    description: 'A chronological timeline of my professional journey — from early marketing experiments to founding a newsletter at the intersection of AI and modern marketing.',
    heading: 'Journey',
    intro: 'This isn\'t a resume — it\'s the honest story of how I\'ve grown as a marketer. The experiments that failed, the newsletters that took off, and the frameworks I\'ve built from first principles along the way.',
  },

  /**
   * Resources / Stuff I Like page (/stuff-i-like)
   * Curated collection of books, podcasts, tools, services, and reading materials
   */
  stuffILike: {
    title: 'Stuff I Like - Curated Resources',
    description: 'A curated collection of books, podcasts, tools, services, and resources I recommend and use.',
    heading: 'Stuff I Like',
    intro: 'A curated collection of tools, books, podcasts, services, and reading materials I use and recommend. Everything here has earned a place in my workflow.',
  },
  
  /**
   * Contact page (/contact)
   */
  contact: {
    title: 'Contact - Get in Touch',
    description: 'Get in touch to discuss brand collaborations, newsletter sponsorships, consulting, or just to say hi.',
    heading: 'Let\'s Talk',
  },
} as const;

/**
 * Type export for the pages configuration
 */
export type PagesConfig = typeof pagesConfig;

/**
 * Type export for a single page metadata
 */
export type PageConfig = PageMeta;
