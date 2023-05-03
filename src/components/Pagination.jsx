import { Link } from 'react-router-dom';

const Pagination = ({ page, total }) => {
  return (
    <div className='flex gap-4 mt-4'>
      {Number(page) > 1 && (
        <Link
          to={`/${Number(page) - 1}`}
          className='text-blue-300 bg-zinc-600 px-4 py-2 hover:shadow-sm hover:bg-zinc-500 rounded-md'
        >
          Prev page
        </Link>
      )}
      {total > 1 && Number(page) + 1 <= total ? (
        <Link
          className='text-blue-300 bg-zinc-600 px-4 py-2 hover:shadow-sm hover:bg-zinc-500 rounded-md'
          to={`/${Number(page) + 1}`}
        >
          Next page
        </Link>
      ) : null}
    </div>
  );
};

export default Pagination;
