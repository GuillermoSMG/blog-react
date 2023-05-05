import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { userContext } from './UserContext';
import SearchBar from './SearchBar';

const Navbar = () => {
  const { user } = useContext(userContext);

  return (
    <header className='flex w-full h-24 items-center justify-around md:justify-between bg-zinc-950 text-white'>
      <div className='flex max-w-md'>
        <Link className='mr-4 ml-1 md:mx-5' to={'/'}>
          <h1 className='text-5xl hidden md:block'>CodeWord</h1>
          <h1 className='text-3xl block md:hidden'>CW</h1>
        </Link>
        <SearchBar />
      </div>
      {!user ? (
        <div className='mx-3 flex gap-3 flex-col md:flex-row'>
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
    </header>
  );
};

export default Navbar;
