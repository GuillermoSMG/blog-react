import { useState, useEffect } from 'react';
import { noAuthFetch } from '../services/articles';

export const useArticles = (pageParam = 1) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(null);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setLoading(true);
    setArticles([]);
    noAuthFetch(pageParam)
      .then(data => {
        setArticles(data.articles);
        setPage(data.page);
        setItemsPerPage(data.itemsPerPage);
        setTotal(data.pages);
        setLoading(false);
      })
      .catch(error => {
        setError(error?.response?.data?.message);
        setLoading(false);
      });
  }, [pageParam]);
  return { articles, page, itemsPerPage, total, loading, error };
};
