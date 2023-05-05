import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { formatedDate } from '../utils/formatedDate';
import { userContext } from './UserContext';
import { deleteArticle } from '../services/articles';
import DeleteButton from './DeleteButton';
import { deleteToast } from '../utils/deleteToast';
import EditButton from './EditButton';

const Article = ({ article }) => {
  const { user } = useContext(userContext);
  const handleDelete = async e => {
    // usar toastify
    try {
      await deleteArticle(article._id);
      deleteToast();
    } catch (error) {
      throw new Error('Error');
    }
  };

  const userId = user?.user?.id;
  const articleUser = article?.user?._id || article?.user;
  return (
    <article
      key={article?._id}
      className='relative flex flex-col md:px-8 md:py-5 md:mr-4'
    >
      {user?.user?.role === 'role_admin' && (
        <span className='text-white'>Hola admin</span>
      )}
      <h2 className='relative text-white text-2xl pb-3'>
        {article?.title}
        {articleUser === userId && (
          <div className='absolute top-0 -right-2 md:right-0 md:top-0'>
            <DeleteButton handleDelete={handleDelete} />
            <EditButton />
          </div>
        )}
      </h2>
      <Link className='flex flex-col' to={`/article/${article?._id}`}>
        <p className='text-gray-300'>{article?.content}</p>
        {article?.image !== null ? <img src={article?.image} /> : null}
        <p className='text-sm text-gray-500 self-end'>
          {formatedDate(article?.date)}
        </p>
      </Link>
    </article>
  );
};

export default Article;
