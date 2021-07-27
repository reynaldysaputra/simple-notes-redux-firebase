import { combineReducers } from "redux";
import { registerReducer } from "./register/registerReducer";

export const allReducer = combineReducers({
  register: registerReducer
})