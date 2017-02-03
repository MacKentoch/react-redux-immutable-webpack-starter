import React, {
  PureComponent,
  PropTypes
}                           from 'react';
import RightNavButton       from './rightNavButton/RightNavButton';
import Immutable            from 'immutable';


class RightNav extends PureComponent {
  render() {
    const { rightLinks, onRightNavButtonClick } = this.props;
    return (
      <ul className="nav navbar-nav navbar-right">
        {
          rightLinks.map(
            (aLinkBtn, index) => {
              return (
                <RightNavButton
                  key={index}
                  link={aLinkBtn.get('link')}
                  label={aLinkBtn.get('label')}
                  viewName={aLinkBtn.get('view')}
                  onClick={onRightNavButtonClick}
                />
              );
            }
          )
        }
      </ul>
    );
  }
}

RightNav.propTypes = {
  rightLinks: PropTypes.instanceOf(Immutable.List),
  onRightNavButtonClick: PropTypes.func
};

export default RightNav;
