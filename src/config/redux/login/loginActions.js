import { GET_USER, LOGIN_CLEAR, LOGIN_ERROR, LOGIN_LOADING, LOGIN_USER, LOGOUT_USER } from "./loginType";
import firebase from '../../firebase';

export const loginUser = (userLogin) => {
  return {
    type: LOGIN_USER,
    userLogin
  }
}

export const loginLoading = (loading) => {
  return {
    type: LOGIN_LOADING,
    loading
  }
}

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    error
  }
}

export const loginClear = () => {
  return {
    type: LOGIN_CLEAR
  }
}

export const getUser = (userLogin) => {
  return {
    type: GET_USER,
    userLogin
  }
}

export const logoutUser = (data) => {
  return {
    type: LOGOUT_USER,
    data
  }
}

export const getUsers = () => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged(data => {
      if(data) {
        dispatch(loginUser(data));
      }
      dispatch(loginLoading(false));
    })
  }
}

export const loginUsers = ({email, password}) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(loginLoading(true));
      
      firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then(response => {
          resolve(true);
          dispatch(loginUser(response.user));
        }).catch(err  => {
          dispatch(loginError(err));
          reject(false);
        }).finally(() => dispatch(loginLoading(false)))
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    firebase.auth().signOut()
      .then(res => {
        console.log('Berhasil Logout!');
        console.log(res);
        dispatch(logoutUser(res));
      })
  }
}