import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { userContext } from './UserContext';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';
import { themeContext } from './ThemeContext';

const Navbar = () => {
  const { user } = useContext(userContext);
  const menuRef = useRef();
  const { theme } = useContext(themeContext);

  const openMenu = () => {
    menuRef.current.classList.toggle('hidden');
  };

  return (
    <header className='flex w-full sticky top-0 z-50 justify-around md:justify-between h-24 items-center bg-white dark:bg-zinc-950 dark:text-white'>
      <div className='flex gap-4 justify-around md:justify-between w-full'>
        <Link className='dark:text-white ml-3' to={'/'}>
          <h1 className='text-5xl font-bold hidden md:block'>CodeWord</h1>
          <h1 className='text-3xl font-bold block md:hidden'>CW</h1>
        </Link>
        <SearchBar />
        <ThemeToggle />
        <div className='hidden md:flex items-center'>
          {!user ? (
            <div className='flex gap-1 dark:text-white'>
              <Link
                className='font-medium md:mx-6 hover:underline'
                to={'/login'}
              >
                Iniciar sesión
              </Link>
            </div>
          ) : (
            <div className='flex gap-1'>
              <Logout />
            </div>
          )}
        </div>
        {theme === 'dark' ? (
          <div className='w-8 md:hidden flex items-center' onClick={openMenu}>
            <img src='/menu-w.png' />
          </div>
        ) : (
          <div className='w-8 md:hidden flex items-center' onClick={openMenu}>
            <img src='/menu.png' />
          </div>
        )}
        <div
          ref={menuRef}
          className='hidden md:hidden items-center absolute top-0 right-4'
        >
          {!user ? (
            <div className='flex gap-1 dark:text-white absolute bg-slate-100 rounded-md w-36 dark:bg-zinc-800 right-0 top-20 p-4'>
              <Link
                className='font-medium md:mx-6 hover:underline'
                to={'/login'}
                onClick={openMenu}
              >
                Iniciar sesión
              </Link>
            </div>
          ) : (
            <div className='flex gap-1 dark:text-white absolute bg-slate-100 rounded-md w-36 dark:bg-zinc-800 right-0 top-20 p-4'>
              <Logout onClick={openMenu} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
