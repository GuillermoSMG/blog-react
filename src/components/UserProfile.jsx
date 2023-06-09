import { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useProfile } from '../hooks/useProfile';
import { useUserArticles } from '../hooks/useUserArticles';
import Article from './Article';
import Error from './Error';
import Loading from './Loading';
import Pagination from './Pagination';

const UserProfile = () => {
  const { id, page = 1 } = useParams();
  const { articles, total, loading, articleError } = useUserArticles(id, page);
  const { profile, error } = useProfile({
    id: articles[0]?.user._id,
  });
  return (
    <section className='dark:bg-zinc-900 w-11/12 items-center self-center flex flex-col mb-14'>
      {error && <Error error={error} />}
      {profile.length !== 0 && (
        <div className='flex items-center self-start gap-4 py-4 md:mx-8'>
          <img
            className='w-10 aspect-square rounded-full'
            src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fronaldmottram.co.nz%2Fwp-content%2Fuploads%2F2019%2F01%2Fdefault-user-icon-8-300x300.jpg&f=1&nofb=1&ipt=2d796ffae4b86ab417c69c233a8537b6d58082ddc1f93417d509d0955c5b0019&ipo=images'
            alt='Profile default image'
          />
          <h1 className='text-2xl dark:text-white'>{profile?.nickname}</h1>
          <span className='text-sm text-gray-400'>{profile?.name}</span>
          {loading && <Loading />}
          {articleError && <Error error={articleError} />}
          {articles?.length === 1 ? (
            <span className='text-xs text-gray-500 ml-10'>
              {articles?.length} artículo en esta página.
            </span>
          ) : (
            <span className='text-xs text-gray-500 ml-10'>
              {articles?.length} artículos en esta página.
            </span>
          )}
        </div>
      )}
      {loading && <Loading />}
      {articleError && <Error error={articleError} />}
      {articles.length > 0 &&
        articles.map(article => (
          <Article key={article._id} article={article} />
        ))}
      <Pagination page={page} total={total} url={`/user/${id}/`} />
      <Toaster />
    </section>
  );
};

export default UserProfile;
