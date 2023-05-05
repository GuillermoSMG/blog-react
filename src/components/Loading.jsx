import { MutatingDots } from 'react-loader-spinner';
const Loading = () => {
  return (
    <MutatingDots
      height='80'
      width='80'
      radius='9'
      color='blue'
      secondaryColor='skyblue'
      ariaLabel='loading'
    />
  );
};

export default Loading;
