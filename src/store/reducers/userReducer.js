import { GET_USER } from "../types";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
};
