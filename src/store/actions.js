import { GET_USER } from "./types";

export const getUser = (data) => {
  return {
    type: GET_USER,
    payload: data,
  };
};
