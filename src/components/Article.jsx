import { Link } from 'react-router-dom';

const Article = ({ article }) => {
  return (
    <Link to={`/article/${article._id}`}>
      <article key={article._id} className='bg-slate-500'>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        {article.image !== null ? <img src={article.image} /> : null}
      </article>
    </Link>
  );
};

export default Article;
