import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './component/login';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <LoginForm />
  </Provider>,
  document.getElementById('root')
);

