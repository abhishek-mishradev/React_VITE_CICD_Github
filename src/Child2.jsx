const Child2 = ({ count, onDecrement }) => {
  return (
    <div>
      <h1>Child 2 Component</h1>
      <p>Count: {count}</p>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

export default Child2;
