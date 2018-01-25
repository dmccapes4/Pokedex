import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import * as APIUtil from './util/api_util';
import { receiveAllPokemon, requestAllPokemon }
  from './actions/pokemon_actions';
import configureStore from './store/store.js';
import {selectAllPokemon} from './reducers/selectors.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
  window.store = store;
  window.getState = store.getState;
});
