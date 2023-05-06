import { Link } from 'react-router-dom';

const Pagination = ({ page, total, url = '/' }) => {
  return (
    <div className='flex items-center gap-4 mt-4'>
      {Number(page) > 1 ? (
        <button>
          <Link
            to={`${url}${Number(page) - 1}`}
            className='font-bold text-green-500 bg-slate-300 hover:text-slate-300 hover:bg-green-500 dark:text-blue-300 dark:bg-zinc-600 disabled:text-slate-500 disabled:hover:bg-slate-300 dark:disabled:hover:bg-zinc-600 px-4 py-2 hover:shadow-sm dark:hover:bg-zinc-500 dark:disabled:opacity-50 rounded-md'
          >
            ««
          </Link>
        </button>
      ) : (
        <button
          disabled
          className='font-bold text-green-500 bg-slate-300 hover:text-slate-300 hover:bg-green-500 dark:text-blue-300 dark:bg-zinc-600 disabled:text-slate-500 disabled:hover:bg-slate-300 dark:disabled:hover:bg-zinc-600 px-4 py-2 hover:shadow-sm dark:hover:bg-zinc-500 dark:disabled:opacity-50 rounded-md'
          title='Nothing Beyond'
        >
          ««
        </button>
      )}
      <span className='font-bold dark:text-white'>
        {page} de {total}
      </span>
      {total > 1 && Number(page) + 1 <= total ? (
        <button>
          <Link
            className='font-bold text-green-500 bg-slate-300 hover:text-slate-300 hover:bg-green-500 dark:text-blue-300 dark:bg-zinc-600 disabled:text-slate-500 disabled:hover:bg-slate-300 dark:disabled:hover:bg-zinc-600 px-4 py-2 hover:shadow-sm dark:hover:bg-zinc-500 dark:disabled:opacity-50 rounded-md'
            to={`${url}${Number(page) + 1}`}
          >
            »»
          </Link>
        </button>
      ) : (
        <button
          title='Nothing Beyond'
          className='font-bold text-green-500 bg-slate-300 hover:text-slate-300 hover:bg-green-500 dark:text-blue-300 dark:bg-zinc-600 disabled:text-slate-500 disabled:hover:bg-slate-300 dark:disabled:hover:bg-zinc-600 px-4 py-2 hover:shadow-sm dark:hover:bg-zinc-500 dark:disabled:opacity-50 rounded-md'
          disabled
        >
          »»
        </button>
      )}
    </div>
  );
};

export default Pagination;
