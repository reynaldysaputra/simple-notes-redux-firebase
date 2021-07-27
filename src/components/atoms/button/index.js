import React from 'react';

function Button({onClick, title, loading}){
  return loading ? 
  <button className='btn disabled'>Loading...</button> : 
  <button className='btn' onClick={onClick}>{title}</button>
}

export default Button;