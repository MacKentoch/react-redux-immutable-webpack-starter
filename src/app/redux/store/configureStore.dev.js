import {
  createStore,
  compose,
  // combineReducers,
  applyMiddleware
}                               from 'redux';
// import { routerReducer }        from 'react-router-redux';
import routerReducer            from './immutableRouteReducer';
import { combineReducers }      from 'redux-immutable';
import { persistState }         from 'redux-devtools';
import createLogger             from 'redux-logger';
import thunkMiddleware          from 'redux-thunk';
import * as reducers            from '../modules/reducers';
import DevTools                 from '../devTools/DevTools.jsx';


const loggerMiddleware = createLogger({
  level:     'info',
  collapsed: true,
  stateTransformer: state => state.toJS()
});

// createStore : enhancer
const enhancer = compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware), // logger after thunk to avoid undefined actions
  persistState(getDebugSessionKey()),
  DevTools.instrument()
);

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}

// combine reducers -> createStore reducer
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);
  // checks if webpack HMR:
  if (module.hot) {
    module.hot.accept('../modules/reducers', () =>
      store.replaceReducer(require('../modules/reducers').default)
    );
  }

  return store;
}
