import { REGISTER_CLEAR, REGISTER_ERROR, REGISTER_LOADING, REGISTER_USER } from "./registerType";

const initialState = {
  userRegister: null,
  loading: null,
  error: null
}

export function registerReducer(state=initialState, action){
  switch(action.type){
    case REGISTER_USER: 
      return {...state, userRegister: action.userRegister}
    case REGISTER_LOADING:
        return {...state, loading: action.loading}
    case REGISTER_ERROR: 
      return {...state, error: action.error}
    case REGISTER_CLEAR: 
      return {user: null, loading: null, error: null}
    default: return state;
  }
}