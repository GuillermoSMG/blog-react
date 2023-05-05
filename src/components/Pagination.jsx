import { Link } from 'react-router-dom';

const Pagination = ({ page, total, url = '/' }) => {
  return (
    <div className='flex items-center gap-4 mt-4'>
      {Number(page) > 1 ? (
        <button>
          <Link
            to={`${url}${Number(page) - 1}`}
            className='text-blue-300 bg-zinc-600 px-4 py-2 hover:shadow-sm hover:bg-zinc-500 rounded-md'
          >
            Prev
          </Link>
        </button>
      ) : (
        <button
          disabled
          title='Nothing Beyond'
          className='text-blue-300 bg-zinc-600 px-4 py-2 hover:shadow-sm hover:bg-zinc-500 rounded-md disabled:opacity-40'
        >
          {' '}
          Prev{' '}
        </button>
      )}
      <span className='text-white'>Page {page}</span>
      {total > 1 && Number(page) + 1 <= total ? (
        <button>
          <Link
            className='text-blue-300 bg-zinc-600 px-4 py-2 hover:shadow-sm hover:bg-zinc-500 rounded-md'
            to={`${url}${Number(page) + 1}`}
          >
            Next
          </Link>
        </button>
      ) : (
        <button
          title='Nothing Beyond'
          disabled
          className='text-blue-300 bg-zinc-600 px-4 py-2 hover:shadow-sm hover:bg-zinc-500 rounded-md disabled:opacity-40'
        >
          {' '}
          Next{' '}
        </button>
      )}
    </div>
  );
};

export default Pagination;
