import { useParams } from 'react-router-dom';
import { useUserArticles } from '../hooks/useUserArticles';
import Article from './Article';
import { useProfile } from '../hooks/useProfile';

const UserProfile = () => {
  const { id } = useParams();
  const { articles } = useUserArticles(id);
  const { profile } = useProfile({ id: articles[0]?.user });

  return (
    <section>
      {profile && (
        <div className='flex items-center gap-4'>
          <img
            className='w-10 aspect-square rounded-full'
            src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fronaldmottram.co.nz%2Fwp-content%2Fuploads%2F2019%2F01%2Fdefault-user-icon-8-300x300.jpg&f=1&nofb=1&ipt=2d796ffae4b86ab417c69c233a8537b6d58082ddc1f93417d509d0955c5b0019&ipo=images'
            alt=''
          />
          <h1>{profile?.name}</h1>
        </div>
      )}
      {articles.length > 0 && <Article article={articles[0]} />}
    </section>
  );
};

export default UserProfile;
