import { useContext } from 'react';
import { userContext } from './UserContext';

export default function Logout() {
  const { logout } = useContext(userContext);

  const handleLogout = () => {
    logout();
    window.location.href = import.meta.env.VITE_BASE_URL;
  };

  return (
    <div className='md:mx-8 flex gap-3'>
      <button
        className='font-medium hover:underline'
        onClick={() => handleLogout()}
      >
        Logout
      </button>
    </div>
  );
}
