import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import counterReducer from "./reducer";
import counterSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store2 = createStore(
  counterReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(counterSaga);
