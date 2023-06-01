import { useContext } from 'react';
import { themeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, handleTheme } = useContext(themeContext);
  const icon =
    theme === 'dark' ? (
      <img className='w-7' src='/sun.svg' alt='Set light theme' />
    ) : (
      <img className='w-7' src='/moon.svg' alt='Set dark theme' />
    );

  return (
    <button onClick={handleTheme} className='text-xl'>
      {icon}
    </button>
  );
};

export default ThemeToggle;
