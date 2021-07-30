import React from 'react';
import Button from '../../../components/atoms/button';
import { useDispatch, useSelector } from 'react-redux';
import { loginUsers } from '../../../config/redux/login/loginActions';
import { useHistory } from 'react-router-dom';

function Login(){
  const {loading} = useSelector(state => state.login);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const {email, password} = event.target.elements;
    const res = await dispatch(loginUsers({email, password})).catch(err => err);

    if(res) {
      history.push('/');
    }
  }

  return(
    <>
      <div className='auth-container'>
        <div className='auth-card'>
          <form onSubmit={handleLogin}>
            <p className='auth-title'>Login Page</p>
            <input type="text" placeholder='Email' className='input' name='email'/>
            <input type="password" placeholder='Password' className='input' name='password'/>
            <Button title='Register' loading={loading} />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;