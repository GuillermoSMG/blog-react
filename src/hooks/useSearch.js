import { useState, useEffect } from 'react';
import { searchArticle } from '../services/articles';

export const useSearch = searchString => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setArticles([]);
    setError(null);
    searchArticle(searchString)
      .then(data => {
        setArticles(data.findArticles);
        setLoading(false);
      })
      .catch(error => {
        setError(error.response.data.message);
        setLoading(false);
      });
  }, [searchString]);
  return { articles, loading, error };
};
