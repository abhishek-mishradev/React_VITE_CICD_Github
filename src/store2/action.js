export const INCREMENT_REQUEST = "INCREMENT_REQUEST";
export const DECREMENT_REQUEST = "DECREMENT_REQUEST";

export const INCREMENT_SUCCESS = "INCREMENT_SUCCESS";
export const DECREMENT_SUCCESS = "DECREMENT_SUCCESS";

export const incrementRequest = () => {
  return {
    type: INCREMENT_REQUEST,
  };
};

export const decrementRequest = () => {
  return {
    type: DECREMENT_REQUEST,
  };
};

export const incrementSuccess = () => {
  return {
    type: INCREMENT_SUCCESS,
  };
};

export const decrementSuccess = () => {
  return {
    type: DECREMENT_SUCCESS,
  };
};
