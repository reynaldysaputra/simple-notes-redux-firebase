import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_USER } from "./registerType"
import firebase from '../../firebase/index';

export const registerUser = (data) => {
  return {
    type: REGISTER_USER,
    user: data
  }
}

export const registerLoading = (loading) => {
  return {
    type: REGISTER_LOADING,
    loading: loading
  }
}

export const registerError = (error) => {
  return {
    type: REGISTER_ERROR,
    error: error
  }
}

export const registerUsers = ({email, password}) => {
  return (dispatch) => {
    dispatch(registerLoading(true));
    
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      .then(response => {
        dispatch(registerUser(response));
      }).catch(error => {
        dispatch(registerError(error));
      }).finally(() => dispatch(registerLoading(false)))
  }
}