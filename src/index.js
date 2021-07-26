import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/pages/app';
import firebase from './config/firebase';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

