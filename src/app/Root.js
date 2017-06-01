// @flow weak

/* eslint-disable no-process-env */
import React, {
  Component
}                               from 'react';
import {
  BrowserRouter as Router
}                               from 'react-router-dom';
import { Provider }             from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore           from './redux/store/configureStore';
import { createBrowserHistory } from 'history';
import App                      from './containers/app/App';

const history       = createBrowserHistory();
const store         = configureStore();
const syncedHistory = syncHistoryWithStore(
  history,
  store,
  {
    selectLocationState(state) {
      return state.get('routing').toJS();
    }
  }
);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={syncedHistory}>
            <App />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default Root;
