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
  resumeUrl: getEnv('SITE_RESUME_URL', '/resume.pdf'),
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
    { label: 'Notes', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;
export type SiteConfig = typeof siteConfig;
export type SocialLinks = typeof siteConfig.social;
export type NavItem = typeof siteConfig.nav[number];
