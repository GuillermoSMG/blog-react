import { useState } from 'react';
import useField from '../hooks/useField';
import { postArticle } from '../services/articles';

const FormArticle = () => {
  const title = useField({ type: 'text', name: 'title' });
  const content = useField({ type: 'text', name: 'content' });
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      setError(null);
      const article = await postArticle({
        title: title.value,
        content: content.value,
      });
      return article;
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div className='w-2/3 bg-slate-500 my-5'>
      <form className='flex flex-col gap-2 px-8 py-4' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4'>
          <input
            className='rounded-sm'
            {...title}
            placeholder='¿Qué es JavaScript?'
            required
          />
          <textarea
            className='h-20 rounded-sm resize-none'
            {...content}
            placeholder='JavaScript es...'
            required
          />
        </div>
        <button className='bg-blue-600 text-sm px-3 m-auto py-2 w-1/3 rounded-md text-white font-bold hover:bg-blue-500 active:translate-y-1'>
          Post 📬
        </button>
        {error && <span className='text-red-600 font-semibold'>{error}</span>}
      </form>
    </div>
  );
};

export default FormArticle;
