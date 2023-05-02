import { useState, useEffect } from 'react';
import { noAuthFetch } from '../services/noAuthFetch';

export const useArticles = (pageParam = 1) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(null);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setArticles([]);
    noAuthFetch(`articles/${pageParam}`).then(data => {
      setArticles(data.articles);
      setPage(data.page);
      setItemsPerPage(data.itemsPerPage);
      setTotal(data.pages);
      setLoading(false);
    });
  }, [pageParam]);
  return { articles, page, itemsPerPage, total, loading };
};
