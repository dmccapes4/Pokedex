import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import configureStore from './store/store.js';
import { HashRouter, Route } from 'react-router-dom';
import * as APIUtil from './util/api_util';
import * as pokeActions from './actions/pokemon_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.APIUtil = APIUtil;
  window.pokeActions = pokeActions;
});
