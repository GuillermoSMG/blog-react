import { useContext } from 'react';
import { userContext } from './UserContext';

export default function Logout() {
  const { logout } = useContext(userContext);

  const handleLogout = () => {
    logout();
    window.location.href = import.meta.env.VITE_BASE_URL;
  };

  return (
    <div className='md:mx-6 flex'>
      <button
        className='font-medium hover:underline max-w-fit'
        onClick={() => handleLogout()}
      >
        Cerrar sesión
      </button>
    </div>
  );
}
