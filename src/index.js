import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// put your reducers here!
const speedControl = (state = 0, action) => {
  return state;
}

const passengerList = (state=[], action) => {
  return state;
}

// be sure to combine your reducers!
const storeInstance = () => createStore(
  combineReducers({
    speedControl,
    passengerList,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance()}><App /></Provider>, document.getElementById('root'));

export {storeInstance};