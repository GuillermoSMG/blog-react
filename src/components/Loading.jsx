import { MutatingDots } from 'react-loader-spinner';
import { useContext } from 'react';
import { themeContext } from './ThemeContext';
const Loading = () => {
  const { theme } = useContext(themeContext);
  return (
    <MutatingDots
      height='80'
      width='80'
      radius='9'
      color={theme === 'dark' ? 'blue' : 'green'}
      secondaryColor={theme === 'dark' ? 'skyblue' : 'rgb(34 197 94)'}
      ariaLabel='loading'
    />
  );
};

export default Loading;
