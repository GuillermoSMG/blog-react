import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { userContext } from './UserContext';

const Navbar = () => {
  const { user } = useContext(userContext);

  return (
    <div className='flex h-24 items-center justify-between bg-zinc-950 text-white'>
      <Link className='mx-8' to={'/'}>
        <h1 className='text-5xl'>Blog</h1>
      </Link>
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
