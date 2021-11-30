import { ADD } from "../types";

export const testReducer = (state = { count: 100 }, action) => {
  switch (action.type) {
    case ADD:
      return action.payload;
    default:
      return state;
  }
};
