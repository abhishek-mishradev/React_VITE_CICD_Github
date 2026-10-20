import useCounter from "./useCounter";

const Custom = () => {

  const { count, increment, decrement } = useCounter();
  return (
    <div>

      
      <h1>Custom Component</h1>

      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>



    </div>
  )
}

export default Custom
