// ParentComponent.js
import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <Child1
        count={count}
        onIncrement={handleIncrement}
        // onDecrement={handleDecrement}
      />
      <Child2
        count={count}
        // onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      <Child1
        count={count}
        onIncrement={handleIncrement}
        // onDecrement={handleDecrement}
      />
      <Child2
        count={count}
        // onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
};

export default ParentComponent;
