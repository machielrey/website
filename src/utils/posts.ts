import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Get published blog posts, sorted by date (newest first).
 * Filters out drafts in production builds.
 */
export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', ({ data }) => {
    // Show drafts only in development
    if (import.meta.env.PROD && data.draft) {
      return false;
    }
    return true;
  });

  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
