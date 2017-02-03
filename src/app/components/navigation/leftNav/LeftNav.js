import React, {
  PureComponent,
  PropTypes
}                           from 'react';
import LeftNavButton        from './leftNavButton/LeftNavButton';
import Immutable            from 'immutable';


class LeftNav extends PureComponent {
  render() {
    const { leftLinks, onLeftNavButtonClick } = this.props;
    return (
      <ul className="nav navbar-nav">
        {
          leftLinks.map(
            (aLinkBtn, index) => {
              return (
                <LeftNavButton
                  key={index}
                  link={aLinkBtn.get('link')}
                  label={aLinkBtn.get('label')}
                  viewName={aLinkBtn.get('view')}
                  onClick={onLeftNavButtonClick}
                />
              );
            }
          )
        }
      </ul>
    );
  }
}

LeftNav.propTypes = {
  leftLinks: PropTypes.instanceOf(Immutable.List),
  onLeftNavButtonClick: PropTypes.func
};

export default LeftNav;
