import { MagnifyingGlass } from 'react-loader-spinner';
import { useContext } from 'react';
import { themeContext } from './ThemeContext';
const LoadingSearch = () => {
  const { theme } = useContext(themeContext);
  return (
    <MagnifyingGlass
      height='80'
      width='80'
      radius='9'
      color={theme === 'dark' ? 'blue' : 'green'}
      ariaLabel='loading'
    />
  );
};

export default LoadingSearch;
