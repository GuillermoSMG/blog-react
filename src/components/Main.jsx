import { useParams } from 'react-router-dom';
import ArticlesFeed from '../components/ArticlesFeed';
import { useArticles } from '../hooks/useArticles';
import FormArticle from './FormArticle';
import Pagination from './Pagination';
import { useContext } from 'react';
import { userContext } from './UserContext';

const Main = () => {
  const { page = 1 } = useParams();
  const { articles, total, loading, error } = useArticles(page);
  const { user } = useContext(userContext);
  return (
    <section className='bg-zinc-900 flex flex-col items-center mb-10'>
      {user && <FormArticle />}
      <ArticlesFeed articles={articles} loading={loading} error={error} />
      <Pagination page={page} total={total} />
    </section>
  );
};

export default Main;
