import {
  createStore,
  applyMiddleware,
  compose
}                           from 'redux';
import thunkMiddleware      from 'redux-thunk';
import reducer              from '../modules/reducers';

// createStore : enhancer
const enhancer = compose(
  applyMiddleware(thunkMiddleware)
);

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
