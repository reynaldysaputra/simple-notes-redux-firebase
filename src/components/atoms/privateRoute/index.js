import React from 'react';
import { useSelector } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export default function PrivateRoute({component : Component, ...rest}){
  const {userLogin, loading} = useSelector(state => state.login);

  if(loading) {
    return <h1>Loading...</h1>
  }

  return (
    <Route
      {...rest}
      render={props => {
        return userLogin ? <Component {...props} /> : <Redirect to='/register' />
      }}
    />
  )
}