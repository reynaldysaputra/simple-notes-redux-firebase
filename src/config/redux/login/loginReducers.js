import { LOGIN_CLEAR, LOGIN_ERROR, LOGIN_LOADING, LOGIN_USER, LOGOUT_USER } from "./loginType";

const initalState = {
  userLogin: null,
  loading: true,
  error: null
}

export function loginReducer(state=initalState, action){  
  switch(action.type){
    case LOGIN_USER:
      return {...state, userLogin: action.userLogin}
    case LOGIN_LOADING: 
      return {...state, loading: action.loading}
    case LOGIN_ERROR: 
      return {...state, error: action.error}
    case LOGIN_CLEAR: 
      return {userLogin: null, loading: true, error: null}
    case LOGOUT_USER:
        return {...state, userLogin: null}
    default: return state
  }
}