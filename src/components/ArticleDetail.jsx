import { Link, useParams } from 'react-router-dom';
import { useOneArticle } from '../hooks/useOneArticle';
import { useProfile } from '../hooks/useProfile';
import { formatedDate } from '../utils/formatedDate';

const ArticleDetail = () => {
  const { id } = useParams();
  const { article } = useOneArticle(id);
  const { profile } = useProfile({ id: article?.user });
  return (
    <section className='flex justify-center bg-gray-700 min-h-screen'>
      <article className='w-2/3 bg-gray-300 h-fit' key={article._id}>
        <div className='flex items-center gap-4'>
          <img
            className='w-10 aspect-square rounded-full'
            src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fronaldmottram.co.nz%2Fwp-content%2Fuploads%2F2019%2F01%2Fdefault-user-icon-8-300x300.jpg&f=1&nofb=1&ipt=2d796ffae4b86ab417c69c233a8537b6d58082ddc1f93417d509d0955c5b0019&ipo=images'
            alt=''
          />
          <Link to={`/user/${profile?._id}`}>{profile?.name}</Link>
        </div>
        <h2>{article?.title}</h2>
        <p>{article?.content}</p>
        {article.image !== null ? <img src={article.image} /> : null}
        <p>{formatedDate(article?.date)}</p>
      </article>
    </section>
  );
};

export default ArticleDetail;
