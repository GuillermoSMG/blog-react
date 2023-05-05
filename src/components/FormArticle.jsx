import { useState } from 'react';
import useField from '../hooks/useField';
import { postArticle } from '../services/articles';
import { Toaster } from 'react-hot-toast';
import { postToast } from '../utils/postToast';
import { useNavigate } from 'react-router-dom';
import ActionButton from './ActionButton';
import Error from './Error';

const FormArticle = () => {
  const title = useField({ type: 'text', name: 'title', initialValue: '' });
  const content = useField({ type: 'text', name: 'content', initialValue: '' });
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
    <div className='md:w-2/3 bg-zinc-800 my-5 rounded-2xl'>
      <form
        className='flex flex-col gap-2 px-4 md:px-8 py-4'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col gap-4'>
          <input
            className='rounded-sm outline-none text-white px-4 py-2 bg-zinc-900 focus:bg-zinc-700 focus:text-white'
            name={title.name}
            type={title.type}
            onChange={title.onChange}
            value={title.value}
            placeholder='¿Qué es JavaScript?'
            required
          />
          <textarea
            className='h-20 rounded-sm resize-none outline-none text-white px-4 py-2 bg-zinc-900 focus:bg-zinc-700 focus:text-white'
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
        <ActionButton
          width='w-2/3'
          mdw='md:w-1/3'
          text='Post ✉'
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
