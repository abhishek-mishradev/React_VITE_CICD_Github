import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const doubled = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Double: {doubled}</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default UseMemo;
