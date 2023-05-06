import { Toaster } from 'react-hot-toast';
import Article from './Article';
import Loading from './Loading';
import Error from './Error';

const ArticlesFeed = ({ articles, loading, error }) => {
  return (
    <main className='flex flex-col items-center gap-5 w-5/6 mt-10 md:px-0 md:w-7/12 lg:m-2/3 bg-white dark:bg-zinc-900'>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {!loading && articles.length === 0 && (
        <span className='self-center text-white'>No hay articulos aun.</span>
      )}
      {articles?.map(article => (
        <Article key={article._id} article={article} loading={loading} />
      ))}
      <Toaster />
    </main>
  );
};

export default ArticlesFeed;
