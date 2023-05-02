import { useState } from 'react';

const useField = ({ type, name }) => {
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
  };

  return {
    type,
    name,
    value,
    onChange,
  };
};

export default useField;
