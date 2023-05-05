import { useParams } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';
import Article from './Article';
import Loading from './Loading';
import Error from './Error';

const SearchFeed = () => {
  const { searchString } = useParams();
  const { articles, loading, error } = useSearch(searchString);
  return (
    <section className='self-center h-full'>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {articles?.map(article => (
        <Article key={article._id} article={article} />
      ))}
    </section>
  );
};

export default SearchFeed;
