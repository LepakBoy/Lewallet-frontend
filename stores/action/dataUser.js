import axios from "utils/axios";

export const getUserById = (data) => {
  return {
    type: "GETUSERBYID",
    payload: axios.get(`/user/profile/${data}`),
  };
};
