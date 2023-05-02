import Article from './Article';
import Loading from './Loading';

const ArticlesFeed = ({ articles, loading }) => {
  return (
    <main className='flex flex-col gap-5 w-2/3'>
      {loading && <Loading />}
      {!loading && articles.length === 0 && 'No hay articulos aun.'}
      {articles?.map(article => (
        <Article key={article._id} article={article} loading={loading} />
      ))}
    </main>
  );
};

export default ArticlesFeed;
