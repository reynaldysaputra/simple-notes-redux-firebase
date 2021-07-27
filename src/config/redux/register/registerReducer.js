import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_USER } from "./registerType";

const initialState = {
  user: null,
  loading: null,
  error: null
}

export function registerReducer(state=initialState, action){
  switch(action.type){
    case REGISTER_USER: 
      return {...state, user: action.user}
    case REGISTER_LOADING:
        return {...state, loading: action.loading}
    case REGISTER_ERROR: 
      return {...state, error: action.error}
    default: return state;
  }
}