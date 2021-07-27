import { applyMiddleware, compose, createStore } from "redux"; 
import thunk from "redux-thunk";
import { allReducer } from "./allReducer";

export const store = createStore(
  allReducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)