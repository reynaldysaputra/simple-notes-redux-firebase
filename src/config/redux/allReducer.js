import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducers";
import { notesReducer } from "./notes/notesReducers";
import { registerReducer } from "./register/registerReducer";

export const allReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  notes: notesReducer
})