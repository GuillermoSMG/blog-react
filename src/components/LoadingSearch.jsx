import { MagnifyingGlass } from 'react-loader-spinner';
const LoadingSearch = () => {
  return (
    <MagnifyingGlass
      height='80'
      width='80'
      radius='9'
      color='blue'
      ariaLabel='loading'
    />
  );
};

export default LoadingSearch;
