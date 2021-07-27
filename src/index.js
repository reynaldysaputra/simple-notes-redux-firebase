import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/pages/app';
import firebase from './config/firebase';
import { Provider } from 'react-redux';
import { store } from './config/redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

