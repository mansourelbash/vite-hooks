import React, { useState } from 'react';

const useCounter = (num) => {
  const [count, setCount] = useState(num);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const clearCount = () =>{
    setCount(0);
  }

  const incrementByValue = (value) => {
    setCount(count + value);
  };
  return [count, increment, decrement, clearCount, incrementByValue];
};

export default useCounter;