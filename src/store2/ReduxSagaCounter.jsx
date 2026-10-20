import { useDispatch, useSelector } from "react-redux";
import { incrementRequest, decrementRequest } from "./actions";

const ReduxSagaCounter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Saga Counter</h2>
      <p>Count: {count}</p>

      <button onClick={() => dispatch(incrementRequest())}>Increment</button>
      <button onClick={() => dispatch(decrementRequest())}>Decrement</button>
    </div>
  );
};

export default ReduxSagaCounter;
