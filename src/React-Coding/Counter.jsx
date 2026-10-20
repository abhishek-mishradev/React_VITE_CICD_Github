import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // If next state depends on previous state:
  // use setCount(prev => prev + 1);
  return (
    <div>
      <h1>Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>{" "}
      <br /> <br />
      <button onClick={() => setCount((prev) => prev - 1)}>
        Decrement
      </button>{" "}
      <br /> <br />
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
