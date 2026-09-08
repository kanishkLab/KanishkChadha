/**
 * Reading Time Utility
 * 
 * Calculates estimated reading time based on word count for technical content.
 * Uses a conservative reading speed of 200 words per minute, which accounts for
 * the more careful reading typically required for technical and engineering content.
 * 
 * Features:
 * - Removes code blocks before counting (they're processed separately)
 * - Counts actual words (filters empty strings)
 * - Enforces minimum of 1 minute reading time
 * - Provides formatted output for display
 * 
 * Reading Speed:
 * - 200 WPM for technical/engineering content (more careful reading)
 * - Standard reading is typically 200-250 WPM
 * 
 * @module readingTime
 */
const WORDS_PER_MINUTE = 200;
export function calculateReadingTime(content: string): number {
  // Remove code blocks (they take longer to read, but we count them separately)
  const textWithoutCode = content.replace(/```[\s\S]*?```/g, '');
  
  // Count words
  const words = textWithoutCode.trim().split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;
  
  // Calculate minutes, minimum 1 minute
  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
  
  return minutes;
}
export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}
export function getReadingTime(content: string): string {
  const minutes = calculateReadingTime(content);
  return formatReadingTime(minutes);
}
