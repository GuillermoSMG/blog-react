import { Toaster } from 'react-hot-toast';
import Article from './Article';
import Loading from './Loading';

const ArticlesFeed = ({ articles, loading }) => {
  return (
    <main className='flex flex-col gap-5 w-5/6 mt-10 md:px-0 md:w-5/6 lg:m-2/3 bg-zinc-900'>
      {loading && <Loading />}
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
