import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useField from '../hooks/useField';
import ActionButton from './ActionButton';
import { themeContext } from './ThemeContext';

const SearchBar = () => {
  const search = useField({ type: 'text', name: 'search', initialValue: '' });
  const navigate = useNavigate();
  const { theme } = useContext(themeContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (search.value.startsWith(' ')) return;
    if (search.value === '') return;
    navigate(`/search/${search.value}`);
    search.reset();
  };
  return (
    <div className=''>
      <form
        className='flex items-center gap-2 bg-slate-100 dark:bg-zinc-900 md:py-2 md:px-4 rounded-md'
        onSubmit={handleSubmit}
      >
        <label className='cursor-text w-max p-1' htmlFor='search'>
          {theme === 'dark' ? (
            <img
              className='w-[16px] md:w-[24px] aspect-square hover:animate-spin'
              height='24'
              src='/search.svg'
              alt=''
            />
          ) : (
            <img
              className='w-[16px] md:w-[24px] aspect-square hover:animate-spin'
              height='24'
              src='/searchBlack.svg'
              alt=''
            />
          )}
        </label>
        <input
          className='rounded-sm outline-none w-24 px-2 py-2 bg-slate-100 dark:bg-zinc-900 md:w-auto dark:focus:bg-zinc-700 dark:focus:text-white'
          id='search'
          name={search.name}
          type={search.type}
          onChange={search.onChange}
          value={search.value}
          placeholder='JavaScript, React.'
          required
        />
        <ActionButton text={'Buscar'} />
      </form>
    </div>
  );
};

export default SearchBar;
