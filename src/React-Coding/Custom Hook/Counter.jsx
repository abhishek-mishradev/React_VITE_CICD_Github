import useCounter from "./useCounter";

const Counter = () => {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <h1> Custome Hooks counter</h1>
      <h2>Count: {count}</h2>

      <button onClick={increment}> Add</button>
      <button onClick={decrement}> Minus</button>
    </div>
  );
};

export default Counter;
