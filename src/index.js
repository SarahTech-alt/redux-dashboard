import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducers from './redux/reducers/buttonsReducer'
import registerServiceWorker from './registerServiceWorker';

// put your reducers in /redux/reducers/reducers.js

const storeInstance = createStore(
  reducers,
  applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
