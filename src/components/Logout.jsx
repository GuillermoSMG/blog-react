import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const logout = () => {
    window.localStorage.removeItem('user');
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className='mx-8 flex gap-3'>
      <button
        className='font-medium hover:underline'
        onClick={() => handleLogout()}
      >
        Logout
      </button>
    </div>
  );
}
