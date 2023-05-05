import { useParams } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';
import Article from './Article';
import Error from './Error';
import LoadingSearch from './LoadingSearch';

const SearchFeed = () => {
  const { searchString } = useParams();
  const { articles, loading, error } = useSearch(searchString);
  return (
    <section className='self-center flex flex-col justify-center items-center h-full w-5/6 my-8'>
      {error && <Error error={error} />}
      {loading && <LoadingSearch />}
      {articles?.map(article => (
        <Article key={article._id} article={article} />
      ))}
    </section>
  );
};

export default SearchFeed;
