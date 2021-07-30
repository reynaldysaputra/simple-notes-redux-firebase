import { REGISTER_CLEAR, REGISTER_ERROR, REGISTER_LOADING, REGISTER_USER } from "./registerType"
import firebase from '../../firebase/index';

export const registerUser = (data) => {
  return {
    type: REGISTER_USER,
    userRegister: data
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

export const registerClear = () => {
  return {
    type: REGISTER_CLEAR
  }
}

export const registerUsers = ({email, password}) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(registerLoading(true));

      firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      .then(response => {
        dispatch(registerUser(true));
        alert('Pengguna berhasil didaftarkan!');
        resolve(true);
      }).catch(error => {
        dispatch(registerError(error));
        reject(false);
      }).finally(() => dispatch(registerLoading(false)))
    })
  }
}