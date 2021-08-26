import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';
import * as APIUtil from './util/todo_api_util';
import { fetchTodos } from './actions/todo_actions'

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  const root = document.getElementById('root');

  store.dispatch(fetchTodos());

  ReactDOM.render(<Root store={store} />, root);
  window.fetchTodos = fetchTodos;
});
