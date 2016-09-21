import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/confgiureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import {loginUserCheck} from './actions/userActions';
import '../node_modules/bootstrap/dist/css/bootstrap-modify.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.css';


const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

let token = localStorage.getItem('token');
if (token !== null) {
  if (!store.dispatch(loginUserCheck(token))) {
    browserHistory.push('/autorization');
  }
} else {
  browserHistory.push('/autorization');
}

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
