import { useParams } from 'react-router-dom';
import { useOneArticle } from '../hooks/useOneArticle';

const ArticleDetail = () => {
  const { id } = useParams();
  const { article } = useOneArticle(id);
  return (
    <section className='flex justify-center bg-gray-700 min-h-screen'>
      <article className='w-2/3 bg-gray-300 h-fit' key={article._id}>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        {article.image !== null ? <img src={article.image} /> : null}
      </article>
    </section>
  );
};

export default ArticleDetail;
