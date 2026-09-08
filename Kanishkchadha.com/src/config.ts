/**
 * Site Configuration
 * 
 * Centralized configuration for the entire site, loaded from environment variables.
 * This approach keeps sensitive data and site-specific values out of the codebase
 * while providing type-safe access throughout the application.
 * 
 * Setup:
 * 1. Copy .env.example to .env
 * 2. Customize values for your site
 * 3. Import and use siteConfig throughout the application
 * 
 * Configuration Sections:
 * - Site metadata (URL, language, title, description)
 * - Author information (name, title, bio, email, location)
 * - Social links (GitHub, LinkedIn, Twitter, Mastodon, Bluesky)
 * - Navigation structure
 * 
 * @module config
 */
const getEnv = (key: string, fallback: string = ''): string => {
  return import.meta.env[key] ?? fallback;
};
export const siteConfig = {
  url: getEnv('SITE_URL', 'https://example.com'),
  language: getEnv('SITE_LANGUAGE', 'en'),
  title: getEnv('SITE_TITLE', 'Professional Portfolio'),
  description: getEnv('SITE_DESCRIPTION', 'Engineering leader specializing in system architecture, technical decision-making, and delivering measurable business impact.'),
  author: {
    name: getEnv('SITE_AUTHOR_NAME', 'Your Name'),
    
    title: getEnv('SITE_AUTHOR_TITLE', 'Senior Software Engineer'),
    
    bio: getEnv('SITE_AUTHOR_BIO', 'Engineering leader focused on solving complex technical challenges through thoughtful architecture and pragmatic trade-off analysis.'),
    
    email: getEnv('SITE_AUTHOR_EMAIL', 'hello@example.com'),
    
    location: getEnv('SITE_AUTHOR_LOCATION', ''),
    portrait: getEnv('SITE_AUTHOR_PORTRAIT', ''),
  },
  /* Left empty on purpose. The hero button used to default to '/resume.pdf'
     whether or not that file existed, so it 404'd. index.astro now falls back
     to '/resume.pdf' only when the file is actually present in public/, and
     hides the button otherwise. Set this to point somewhere else entirely
     (a Drive link, a per-role variant). */
  resumeUrl: getEnv('SITE_RESUME_URL', ''),

  newsletter: {
    /* The "Automated Marketer" signup posts to Formspree, the same service the
       contact form uses, until a real ESP is chosen. Defaults to the contact
       endpoint so there is nothing extra to configure; set
       NEWSLETTER_FORMSPREE_ENDPOINT to a second Formspree form to keep
       signups out of the contact inbox (and off the same monthly quota).

       Empty means no signup control is rendered at all — better nothing than
       a form that quietly drops addresses, which is what action="#" did. */
    endpoint: getEnv('NEWSLETTER_FORMSPREE_ENDPOINT', '') || getEnv('FORMSPREE_ENDPOINT', ''),
    /* Optional public URL of the publication, used as a plain link fallback
       while no endpoint is set. */
    url: getEnv('NEWSLETTER_URL', ''),
  },
  social: {
    github: getEnv('SOCIAL_GITHUB', ''),
    
    linkedin: getEnv('SOCIAL_LINKEDIN', ''),
    
    twitter: getEnv('SOCIAL_TWITTER', ''),
    
    mastodon: getEnv('SOCIAL_MASTODON', ''),
    
    bluesky: getEnv('SOCIAL_BLUESKY', ''),
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/projects' },
    { label: 'Stack', href: '/#stack' },
    { label: 'The Lab', href: '/blog' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;
export type SiteConfig = typeof siteConfig;
export type SocialLinks = typeof siteConfig.social;
export type NavItem = typeof siteConfig.nav[number];
