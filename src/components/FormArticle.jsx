import { useState } from 'react';
import useField from '../hooks/useField';
import { postArticle } from '../services/articles';
import { Toaster } from 'react-hot-toast';
import { postToast } from '../utils/postToast';
import { useNavigate } from 'react-router-dom';
import ActionButton from './ActionButton';
import Error from './Error';

const FormArticle = () => {
  const title = useField({ type: 'text', name: 'title' });
  const content = useField({ type: 'text', name: 'content' });
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
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
      navigate('/');
      setDisable(false);
      return article;
    } catch (error) {
      setError(error.response.data.message);
      setDisable(false);
    }
  };
  return (
    <div className='md:w-2/3 bg-slate-200 dark:bg-zinc-800 my-5 rounded-2xl'>
      <form
        className='flex flex-col gap-2 px-4 md:px-8 py-4'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <label htmlFor='title' className='cursor-text text-gray-500'>
              Title
            </label>
            <input
              id='title'
              className='rounded-sm outline-none bg-slate-100 dark:text-white px-4 py-2 dark:bg-zinc-900 dark:focus:bg-zinc-700 dark:focus:text-white'
              name={title.name}
              type={title.type}
              onChange={title.onChange}
              value={title.value}
              placeholder='¿Qué es JavaScript?'
              required
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='content' className='cursor-text text-gray-500'>
              Content
            </label>
            <textarea
              id='content'
              className='h-20 relative rounded-sm resize-none outline-none bg-slate-100 dark:text-white px-4 py-2 dark:bg-zinc-900 dark:focus:bg-zinc-700 dark:focus:text-white'
              name={content.name}
              type={content.type}
              onChange={content.onChange}
              value={content.value}
              placeholder='JavaScript es...'
              required
            ></textarea>
          </div>
          <span className='text-sm text-zinc-500 self-end'>
            Max. 480 caract.
          </span>
        </div>
        <ActionButton
          width='w-2/3'
          mdw='md:w-1/3'
          text='Postear ✉'
          position='self-center'
          disabled={disable}
        />
        {error && <Error error={error} />}
      </form>
      <Toaster />
    </div>
  );
};

export default FormArticle;
