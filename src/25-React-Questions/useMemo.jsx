import { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const suare = useMemo(() => {
    return count * count;
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("hello");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Use Memo</h1>

      <h1>Count : {count}</h1>
      <h1>Square : {suare}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}> increament</button>
    </div>
  );
};

export default UseMemo;
