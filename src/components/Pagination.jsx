import { Link } from 'react-router-dom';

const Pagination = ({ page, total }) => {
  return (
    <div className='flex gap-4 mt-4'>
      {Number(page) > 1 && (
        <Link
          to={`/${Number(page) - 1}`}
          className='text-blue-500 bg-blue-100 px-4 py-2 hover:shadow-sm hover:shadow-blue-300'
        >
          Prev page
        </Link>
      )}
      {total > 1 && Number(page) + 1 <= total ? (
        <Link
          className='text-blue-400 bg-blue-100 px-4 py-2 hover:shadow-sm hover:shadow-blue-300'
          to={`/${Number(page) + 1}`}
        >
          Next page
        </Link>
      ) : null}
    </div>
  );
};

export default Pagination;
