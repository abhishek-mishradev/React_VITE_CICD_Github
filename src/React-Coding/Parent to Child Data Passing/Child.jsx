// const Child = (props) => {
// const Child = ({name}) => {
const Child = ({ name, count, onIncrement, onDecrement, onReset }) => {
  return (
    <div>
      <h1>Child</h1>
      {/* <h3>Props data : {props.name}</h3> */}
      <h3>Props data : {name}</h3>
      <h2>Count : {count}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Child;
