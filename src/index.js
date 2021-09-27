import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// put your reducers here!
// create speedControl reducer with an initial state of 0
// when the action is 'increase speed' the state will be increased by one
// when the action is 'decrease speed' the state will be decreased by one
// if no action return 0
const speedControl = (state = 0, action) => {
  if (action.type === 'INCREASE_SPEED') {
    return state + 1;
  } else if (action.type === 'DECREASE_SPEED') {
    return state - 1;
  }
  return state;
}

// create passengerList reducer with an initial state of an empty array
// when the action is 'add passenger' add the passenger name to 
// the end of the array
// if no action return empty array

const passengerList = (state = ['Sarah'], action) => {
  if (action.type === 'ADD_PASSENGER') {
    return [...state, action.payload];
  }
  return state;
}

// create a store with both reducers to be
// accessed in the app 
const storeInstance = () => createStore(
  combineReducers({
    speedControl,
    passengerList,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance()}><App /></Provider>, document.getElementById('root'));

export { storeInstance };