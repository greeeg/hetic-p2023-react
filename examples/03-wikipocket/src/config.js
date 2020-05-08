/*
 * Endpoint to query 20 random
 * articles from Wikipedia API
 */
export const RANDOM_ARTICLES_ENDPOINT =
  'https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=random&grnnamespace=0&prop=revisions|images&rvprop=content&grnlimit=20';

/*
 * Endpoint to query article's content by title
 * eg. Vančo%20Trajanov
 * @note Make sur to encode title using `encodeURIComponent`
 */
export const ARTICLE_CONTENT_ENDPOINT =
  'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&formatversion=2&exsentences=10&exlimit=1&explaintext=1&titles=';
