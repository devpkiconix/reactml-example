import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
//
import { combineReducers } from 'redux'
import reactml from '@iconix/reactml';

const rootReducer = combineReducers({
  reactml: reactml.reducer,
});

//
export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  middleware.push(logger)
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

function makeStore() {
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers
  );
  return store;
}

export default makeStore;