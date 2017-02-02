import {
  createStore,
  applyMiddleware,
  compose
}                           from 'redux';
import thunkMiddleware      from 'redux-thunk';
import * as reducers        from '../modules/reducers';
import routerReducer        from './immutableRouteReducer';
import { combineReducers }  from 'redux-immutable';

// createStore : enhancer
const enhancer = compose(
  applyMiddleware(thunkMiddleware)
);

// combine reducers
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
