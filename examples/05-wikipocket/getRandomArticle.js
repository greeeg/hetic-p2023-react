const RANDOM_ARTICLE_ENDPOINT =
  'https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=random&grnnamespace=0&prop=extracts&exintro&explaintext&grnlimit=1';

export const getRandomArticle = () => {
  return fetch(RANDOM_ARTICLE_ENDPOINT)
    .then(res => res.json())
    .then(data => {
      const pages = data.query.pages;
      const keys = Object.keys(pages);

      return pages[keys[0]];
    });
};
