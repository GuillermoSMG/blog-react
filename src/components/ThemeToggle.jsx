import { useContext } from 'react';
import { themeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, handleTheme } = useContext(themeContext);
  return (
    <button onClick={handleTheme} className='text-xl'>
      {theme === 'dark' ? ' ☀️ ' : ' 🌑 '}
    </button>
  );
};

export default ThemeToggle;
