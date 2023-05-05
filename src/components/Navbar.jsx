import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { userContext } from './UserContext';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ handleTheme, theme }) => {
  const { user } = useContext(userContext);

  return (
    <header className='flex w-full h-24 items-center justify-around md:justify-between bg-white dark:bg-zinc-950 dark:text-white'>
      <div className='flex max-w-md'>
        <Link className='dark:text-white mr-4 ml-1 md:mx-5' to={'/'}>
          <h1 className='text-5xl font-bold hidden md:block'>CodeWord</h1>
          <h1 className='text-3xl font-bold block md:hidden'>CW</h1>
        </Link>
        <SearchBar />
      </div>
      {!user ? (
        <div className='flex'>
          <ThemeToggle handleTheme={handleTheme} theme={theme} />
          <div className='mx-3 flex gap-3 flex-col md:flex-row'>
            <Link className='font-medium hover:underline' to={'/login'}>
              Login
            </Link>
            <Link className='font-medium hover:underline' to={'/signup'}>
              Signup
            </Link>
          </div>
        </div>
      ) : (
        <div className='flex gap-2'>
          <ThemeToggle handleTheme={handleTheme} theme={theme} />
          <Logout />
        </div>
      )}
    </header>
  );
};

export default Navbar;
