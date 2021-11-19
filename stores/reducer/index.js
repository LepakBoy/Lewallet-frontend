import { combineReducers } from "redux";
import dataUser from "./dataUser";
import authData from "./auth";

export default combineReducers({
  dataUser,
  authData,
});
