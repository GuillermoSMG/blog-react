import { useNavigate } from 'react-router-dom';
import useField from '../hooks/useField';
import ActionButton from './ActionButton';

const SearchBar = () => {
  const search = useField({ type: 'text', name: 'search', initialValue: '' });
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/search/${search.value}`);
    search.reset();
  };
  return (
    <div className=''>
      <form
        className='flex items-center gap-2 bg-zinc-900 md:py-2 md:px-4 rounded-md'
        onSubmit={handleSubmit}
      >
        <label className='cursor-text' htmlFor='search'>
          <img
            className='hidden md:block md:w-6'
            src='/search.svg'
            alt=''
            srcSet=''
          />
        </label>
        <input
          className='rounded-sm outline-none w-24 px-2 py-2 bg-zinc-900 md:w-auto focus:bg-zinc-700 focus:text-white'
          id='search'
          name={search.name}
          type={search.type}
          onChange={search.onChange}
          value={search.value}
          placeholder='JavaScript, React.'
          required
        />
        <ActionButton text={'Search'} />
      </form>
    </div>
  );
};

export default SearchBar;
