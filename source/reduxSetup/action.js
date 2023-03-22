const getActionCode = () => {
  return `
  import { SET_USER } from './actionTypes'
  export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}`;
};

export default getActionCode;
