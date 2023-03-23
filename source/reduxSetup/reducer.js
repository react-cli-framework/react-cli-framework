const getReducerCode = (typescript) => {
  return `import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
} from "./actionTypes";

const initialState = {
  count: 0,
};

${
  typescript
    ? `interface ActionProps {
  type: string;
  payload?: {
    count: number;
  };
}`
    : ""
}
export default function rootReducer(state = initialState, action: ${
    typescript ? "ActionProps" : ""
  }) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET_COUNTER:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
}
`;
};

export default getReducerCode;
