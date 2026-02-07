import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Get published photo albums, sorted by date (newest first).
 * Filters out drafts in production builds.
 */
export async function getPublishedAlbums(): Promise<CollectionEntry<'photos'>[]> {
  const albums = await getCollection('photos', ({ data }) => {
    if (import.meta.env.PROD && data.draft) {
      return false;
    }
    return true;
  });

  return albums.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
