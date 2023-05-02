import { useState, useEffect } from 'react';
import { noAuthFetch } from '../services/noAuthFetch';

export const useOneArticle = id => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    setArticle([]);
    noAuthFetch(`article/${id}`).then(data => setArticle(data.article));
  }, []);

  return { article };
};
