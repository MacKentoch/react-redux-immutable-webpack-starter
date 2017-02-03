import React, {
  PureComponent,
  PropTypes
}                             from 'react';
import {
  NavigationBar,
  BackToTop
}                             from '../../components';
import navigationModel        from '../../models/navigation.json';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../redux/modules/views';
import { fromJS }             from 'immutable';

class App extends PureComponent {
  state = {
    navModel : fromJS(navigationModel)
  };

  render() {
    const { navModel } = this.state;
    const { children } = this.props;
    return (
      <div id="appContainer">
        <NavigationBar
          brand={navModel.get('brand')}
          navModel={navModel}
          handleLeftNavItemClick={this.handleLeftNavItemClick}
          handleRightNavItemClick={this.handleRightNavItemClick}
        />
        <div className="container-fluid">
          {children}
        </div>
        <BackToTop
          minScrollY={40}
          scrollTo={'appContainer'}
        />
      </div>
    );
  }

  handleLeftNavItemClick = (event, viewName) => {
    // something to do here?
  }

  handleRightNavItemClick = (event, viewName) => {
    // something to do here?
  }
}

// statics :
App.propTypes = {
  // react router
  children:   PropTypes.node,
  history:    PropTypes.object,
  location:   PropTypes.object,
  actions:    PropTypes.object,
  // views:
  currentView: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    currentView: state.getIn(['views', 'currentView'])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        ...viewsActions
      },
      dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
