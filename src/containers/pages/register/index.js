import React from 'react';
import './register.scss';
import firebase from '../../../config/firebase/index';

function Register(){
  const handleRegister = (event) => {
    event.preventDefault();
    const {email, password} = event.target.elements;

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      .then(res => {
        console.log('succses: ', res);
      }).catch(err => {
        console.log(err);
      })
  }

  return(
    <>
      <div className='auth-container'>
        <div className='auth-card'>
          <form onSubmit={handleRegister}>
            <p className='auth-title'>Register Page</p>
            <input type="text" placeholder='Email' className='input' name='email'/>
            <input type="password" placeholder='Password' className='input' name='password'/>
            <button className='btn'>Register</button>
          </form>
        </div>
        {/* <button>Go to Dashboard</button> */}
      </div>
    </>
  )
}

export default Register;