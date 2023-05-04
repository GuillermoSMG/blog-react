import { useNavigate } from 'react-router-dom';
import useField from '../hooks/useField';

const SearchBar = () => {
  const search = useField({ type: 'text', name: 'search', initialValue: '' });
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/search/${search.value}`);
    search.reset();
  };
  return (
    <div>
      <form
        className='flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-md'
        onSubmit={handleSubmit}
      >
        <label className='cursor-text' htmlFor='search'>
          <img className='w-6' src='/search.svg' alt='' srcSet='' />
        </label>
        <input
          className='rounded-sm outline-none px-4 py-2 bg-zinc-900 focus:bg-zinc-700 focus:text-white'
          id='search'
          name={search.name}
          type={search.type}
          onChange={search.onChange}
          value={search.value}
          placeholder='JavaScript, React,...'
          required
        />
        <button className='bg-blue-600 text-sm px-3 py-2 rounded-md text-white font-bold hover:bg-blue-500 active:translate-y-1'>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
