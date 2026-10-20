import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const resetCount= ()=>{
    setCount(0)
  }

  return (
    <div>
      <h1> Parent</h1>
      <Child
        name={"abhi"}
        count={count}
        onIncrement={increment}
        onDecrement={decrement}
        onReset={resetCount}
      />
    </div>
  );
};

export default Parent;
