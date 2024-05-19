import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import * as reducers from './Reducers';
import thunk from 'redux-thunk';
const initialState = {};
const middleware = [thunk];
const store = createStore(
  combineReducers(reducers),
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

