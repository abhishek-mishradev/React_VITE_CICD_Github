import { takeEvery, put, delay } from "redux-saga/effects";

import {
  INCREMENT_REQUEST,
  DECREMENT_REQUEST,
  incrementSuccess,
  decrementSuccess,
} from "./actions";

function* handleIncrement() {
  yield delay(500);
  yield put(incrementSuccess());
}

function* handleDecrement() {
  yield delay(500);
  yield put(decrementSuccess());
}

function* counterSaga() {
  yield takeEvery(INCREMENT_REQUEST, handleIncrement);
  yield takeEvery(DECREMENT_REQUEST, handleDecrement);
}

export default counterSaga;
