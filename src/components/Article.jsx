import { Link } from 'react-router-dom';
import { formatedDate } from '../utils/formatedDate';

const Article = ({ article }) => {
  console.log(article);
  return (
    <Link to={`/article/${article?._id}`}>
      <article key={article?._id} className='bg-slate-500'>
        <h2>{article?.title}</h2>
        <p>{article?.content}</p>
        {article?.image !== null ? <img src={article?.image} /> : null}
        <p>{formatedDate(article?.date)}</p>{' '}
      </article>
    </Link>
  );
};

export default Article;
