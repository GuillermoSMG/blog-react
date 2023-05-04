import { useParams } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';
import Article from './Article';
import Loading from './Loading';

const SearchFeed = () => {
  const { searchString } = useParams();
  const { articles, loading, error } = useSearch(searchString);
  return (
    <>
      {error && <span>{error}</span>}
      {loading && <Loading />}
      {articles?.map(article => (
        <Article key={article._id} article={article} />
      ))}
    </>
  );
};

export default SearchFeed;
