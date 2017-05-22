// @flow weak

/* eslint-disable no-process-env */
import React, {
  PropTypes,
  Component
}                               from 'react';
import {
  Router,
  // hashHistory
  browserHistory
  // useRouterHistory
}                               from 'react-router';
import { Provider }             from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore           from './redux/store/configureStore';
// import { createHistory }        from 'history';

// specified base url:
// const browserHistory  = useRouterHistory(createHistory)({
//   basename: '/app'
// });

const store         = configureStore();

const syncedHistory = syncHistoryWithStore(
  browserHistory,
  store,
  {
    selectLocationState(state) {
      return state.get('routing').toJS();
    }
  }
);

class Root extends Component {
  render() {
    const { routes } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={syncedHistory}>
            {routes()}
          </Router>
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  routes: PropTypes.any
};

export default Root;
