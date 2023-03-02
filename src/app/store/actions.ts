import actions from "./constants";

const addStore = (payload:any) => {
  return {
    type: actions.ADD_BUSKET,
    payload: payload,
  };
};

const setAll = (payload:any) => {
  return {
    type: actions.SET_BUSKET,
    payload: payload,
  };
};

export { addStore, setAll };