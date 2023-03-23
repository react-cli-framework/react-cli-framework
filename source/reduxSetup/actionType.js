const getActionTypeCode = (typescript) => {
  return `export const RESET_COUNTER: ${
    typescript ? "string" : ""
  } = "RESET_COUNTER";

export const INCREMENT_COUNTER : ${
    typescript ? "string" : ""
  }= "INCREMENT_COUNTER";

export const DECREMENT_COUNTER: ${
    typescript ? "string" : ""
  } = "DECREMENT_COUNTER";`;
};

export default getActionTypeCode;
