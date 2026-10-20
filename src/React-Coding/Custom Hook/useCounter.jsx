import React, { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return {
    count,
    increment,
    decrement,
  };
};

export default useCounter;

// Whenever my new state depends on the previous state, I prefer functional state update like setCount(prev => prev + 1) because React guarantees that prev represents the latest state for that update, which avoids stale-state issues during batched updates.

// Interview me aap aise bol sakte ho:

//setCount(prev => prev + 1) is the safer approach when the new state depends on the previous state. React state updates can be asynchronous and batched, so count may sometimes contain an older value. Using the functional form gives me the latest previous state value.
