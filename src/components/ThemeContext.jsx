import { createContext, useState, useEffect, useCallback } from 'react';

export const themeContext = createContext();

export default function ThemeContextContainer({ children }) {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) || 'dark'
  );
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    if (theme === 'dark') {
      localStorage.setItem('theme', JSON.stringify('light'));
    } else {
      localStorage.setItem('theme', JSON.stringify('dark'));
    }
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </themeContext.Provider>
  );
}
