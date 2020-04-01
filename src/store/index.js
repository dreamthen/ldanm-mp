import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import rootReducer from '../reducers';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

let middleware;

middleware = (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') ? [
  thunkMiddleware,
  loggerMiddleware
] : [
  thunkMiddleware
];

let storeEnhancer = composeEnhancers(
  applyMiddleware(...middleware)
)(createStore);

export default storeEnhancer(rootReducer, {});

