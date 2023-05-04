import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { userContext } from './UserContext';
import SearchBar from './SearchBar';

const Navbar = () => {
  const { user } = useContext(userContext);

  return (
    <div className='flex h-24 items-center justify-between bg-zinc-950 text-white'>
      <Link className='mx-8 hidden lg:block' to={'/'}>
        <h1 className='text-5xl'>CodeWord</h1>
      </Link>
      <SearchBar />
      {!user ? (
        <div className='mx-8 flex gap-3'>
          <Link className='font-medium hover:underline' to={'/login'}>
            Login
          </Link>
          <Link className='font-medium hover:underline' to={'/signup'}>
            Signup
          </Link>
        </div>
      ) : (
        <Logout />
      )}
    </div>
  );
};

export default Navbar;
