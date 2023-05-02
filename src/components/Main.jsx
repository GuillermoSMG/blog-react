import { useParams } from 'react-router-dom';
import ArticlesFeed from '../components/ArticlesFeed';
import { useArticles } from '../hooks/useArticles';
import FormArticle from './FormArticle';
import Pagination from './Pagination';
import { useContext } from 'react';
import { userContext } from './UserContext';

const Main = () => {
  const { page = 1 } = useParams();
  const { articles, itemsPerPage, total, loading } = useArticles(page);
  const { user } = useContext(userContext);
  return (
    <section className='flex flex-col items-center'>
      {user && <FormArticle />}
      <ArticlesFeed
        articles={articles}
        itemsPerPage={itemsPerPage}
        total={total}
        page={page}
        loading={loading}
      />
      <Pagination page={page} total={total} />
    </section>
  );
};

export default Main;
