import { useState } from 'react';

const useField = ({ type, name, initialValue = '' }) => {
  const [value, setValue] = useState(initialValue);

  const onChange = e => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return {
    type,
    name,
    value,
    onChange,
    reset,
  };
};

export default useField;
