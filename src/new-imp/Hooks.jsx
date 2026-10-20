import React, { useState , useCallback, useMemo} from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  
    const doubleCount = useMemo(() => {
      return count * 2;
    });
  
    const increment = useCallback(() => {
      setCount(count + 1);
    });
  
    return (
      <div>
        <h1>Test Component</h1>
  
        <h1>Count: {count}</h1>
        <h1>Double Count: {doubleCount}</h1>
  
        {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
        <button onClick={increment}>click </button>
      </div>
    );
  };

export default Hooks
