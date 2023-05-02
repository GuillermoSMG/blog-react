import { useState, useEffect } from 'react';
import { noAuthFetch } from '../services/articles';

export const useOneArticle = id => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    setArticle([]);
    noAuthFetch(`article/${id}`).then(data => setArticle(data.article));
  }, []);

  return { article };
};
