const getActionCode = () => {
  return `  import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
} from "./actionTypes";
export function incrementCount() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrementCount() {
  return {
    type: DECREMENT_COUNTER,
  };
}

export function resetCount() {
  return {
    type: RESET_COUNTER,
    payload: 0,
  };
}
`;
};

export default getActionCode;
