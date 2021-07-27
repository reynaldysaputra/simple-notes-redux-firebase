import React from 'react';
import './register.scss';
import Button from '../../../components/atoms/button';
import { useDispatch, useSelector } from 'react-redux';
import { registerUsers } from '../../../config/redux/register/registerActions';

function Register(){
  const {loading} = useSelector(state => state.register);
  const dispatch = useDispatch();

  const handleRegister = (event) => {
    event.preventDefault();
    const {email, password} = event.target.elements;
    dispatch(registerUsers({email, password}))    
  }

  return(
    <>
      <div className='auth-container'>
        <div className='auth-card'>
          <form onSubmit={handleRegister}>
            <p className='auth-title'>Register Page</p>
            <input type="text" placeholder='Email' className='input' name='email'/>
            <input type="password" placeholder='Password' className='input' name='password'/>
            <Button title='Register' loading={loading} />
          </form>
        </div>
      </div>
    </>
  )
}

export default Register;