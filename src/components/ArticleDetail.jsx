import { Link, useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useOneArticle } from '../hooks/useOneArticle';
import { useProfile } from '../hooks/useProfile';
import Article from './Article';
import Loading from './Loading';
import Error from './Error';

const ArticleDetail = () => {
  const { id } = useParams();
  const { article, loading, articleError } = useOneArticle(id);
  const { profile, error, loadingProfile } = useProfile({ id: article?.user });

  return (
    <section className='flex justify-center  bg-white dark:bg-zinc-900'>
      <article
        className='w-11/12 md:w-2/3 flex flex-col justify-center items-center h-fit'
        key={article?._id}
      >
        <Error error={error} />
        {loadingProfile && <Loading />}
        {profile.length !== 0 ? (
          <div className='flex items-center self-start gap-4 p-4'>
            <img
              className='w-7 aspect-square rounded-full'
              src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fronaldmottram.co.nz%2Fwp-content%2Fuploads%2F2019%2F01%2Fdefault-user-icon-8-300x300.jpg&f=1&nofb=1&ipt=2d796ffae4b86ab417c69c233a8537b6d58082ddc1f93417d509d0955c5b0019&ipo=images'
              alt=''
            />
            <Link
              className='text-lg font-bold dark:text-white'
              to={`/user/${profile?._id}`}
            >
              {profile?.nickname}
            </Link>
            &#8226;
            <span className='text-xs text-gray-500'>{profile?.name}</span>
          </div>
        ) : null}
        {loading ? <Loading /> : <Article article={article} />}
        {articleError && <Error error={articleError} />}
      </article>
      <Toaster />
    </section>
  );
};

export default ArticleDetail;
