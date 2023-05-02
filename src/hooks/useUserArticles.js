import { useEffect, useState } from 'react';
import { userArticles } from '../services/user';

export const useUserArticles = id => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(null);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setArticles([]);
    userArticles(id).then(data => {
      setArticles(data.articles);
      setPage(data.page);
      setItemsPerPage(data.itemsPerPage);
      setTotal(data.pages);
      setLoading(false);
    });
  }, [id]);
  return { articles, page, itemsPerPage, total, loading };
};
