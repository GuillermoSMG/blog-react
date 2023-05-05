import { useEffect, useState } from 'react';
import { userArticles } from '../services/user';

export const useUserArticles = id => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(null);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [articleError, setArticleError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setArticleError(null);
    setArticles([]);
    userArticles(id)
      .then(data => {
        setArticles(data.articles);
        setPage(data.page);
        setItemsPerPage(data.itemsPerPage);
        setTotal(data.pages);
        setLoading(false);
      })
      .catch(error => {
        setArticleError(error?.response?.data?.message);
        setLoading(false);
      });
  }, [id]);
  return { articles, page, itemsPerPage, total, loading, articleError };
};
