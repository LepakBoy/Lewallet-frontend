import axios from "utils/axios";

export const authLogin = (data) => {
  return {
    type: "LOGIN",
    payload: axios.post("/auth/login", data),
  };
};
