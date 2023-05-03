import { useState } from 'react';
import useField from '../hooks/useField';
import { postArticle } from '../services/articles';
import { Toaster } from 'react-hot-toast';
import { postToast } from '../utils/postToast';

const FormArticle = () => {
  const title = useField({ type: 'text', name: 'title', initialValue: '' });
  const content = useField({ type: 'text', name: 'content', initialValue: '' });
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(false);
  const handleSubmit = async e => {
    try {
      e.preventDefault();
      setDisable(true);
      setError(null);
      const article = await postArticle({
        title: title.value,
        content: content.value,
      });
      title.reset();
      content.reset();
      postToast();
      setDisable(false);
      return article;
    } catch (error) {
      setError(error.response.data.message);
      setDisable(false);
    }
  };
  return (
    <div className='w-2/3 bg-zinc-800 my-5 rounded-2xl'>
      <form className='flex flex-col gap-2 px-8 py-4' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4'>
          <input
            className='rounded-sm outline-none px-4 py-2 bg-zinc-900 focus:bg-zinc-700 focus:text-white'
            name={title.name}
            type={title.type}
            onChange={title.onChange}
            value={title.value}
            placeholder='¿Qué es JavaScript?'
            required
          />
          <textarea
            className='h-20 rounded-sm resize-none outline-none px-4 py-2 bg-zinc-900 focus:bg-zinc-700 focus:text-white'
            name={content.name}
            type={content.type}
            onChange={content.onChange}
            value={content.value}
            placeholder='JavaScript es...'
            required
          />
          <span className='text-sm text-zinc-500 self-end'>
            Max. 480 caract.
          </span>
        </div>
        <button
          disabled={disable}
          className='bg-blue-600 text-sm px-3 m-auto py-2 w-1/3 rounded-md text-white font-bold hover:bg-blue-500 active:translate-y-1 disabled:bg-blue-300'
        >
          Post ✉
        </button>
        {error && <span className='text-red-600 font-semibold'>{error}</span>}
      </form>
      <Toaster />
    </div>
  );
};

export default FormArticle;
