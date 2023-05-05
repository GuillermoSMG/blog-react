import { useState, useEffect } from 'react';
import { noAuthFetch } from '../services/articles';

export const useOneArticle = id => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [articleError, setArticleError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setArticleError(null);
    setArticle([]);
    noAuthFetch(`article/${id}`)
      .then(data => {
        setArticle(data?.article);
        setLoading(false);
      })
      .catch(error => {
        setArticleError(error?.response?.data?.message);
        setLoading(false);
      });
  }, []);

  return { article, loading, articleError };
};
