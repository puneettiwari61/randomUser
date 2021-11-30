import { ADD } from "./types";

export const add = (data) => {
  return {
    type: ADD,
    payload: data,
  };
};
