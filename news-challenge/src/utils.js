import {v4 as uuidv4} from 'uuid';

export const cleanRemovedArticles = (data) => {
  
  const cleanedArticles = data.filter((article) => {
    return !(
      article.title === "[Removed]" ||
      article.description === "[Removed]" ||
      article.content === "[Removed]" ||
      article.content === null
    );
  });
  const addUniqueID = cleanedArticles.map((cleanedarticle) => {
    return {
      id: uuidv4(),
      source: cleanedarticle.source,
      author: cleanedarticle.author,
      title: cleanedarticle.title,
      description: cleanedarticle.description,
      url: cleanedarticle.url,
      urlToImage: cleanedarticle.urlToImage,
      publishedAt: cleanedarticle.publishedAt,
      content: cleanedarticle.content,
    };
  });
  return addUniqueID;
};
