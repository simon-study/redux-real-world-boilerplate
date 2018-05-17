/**
*
* LogoutHeader
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { NavLink } from 'react-router-dom';

class LogoutHeader extends React.Component {
  render() {
    const { currentUser } = this.props;
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <FormattedMessage {...messages.conduit} />
          </NavLink>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <NavLink to="/" exact activeClassName="active" className="nav-link">
                <FormattedMessage {...messages.home} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/editor" exact activeClassName="active" className="nav-link">
                <i className="ion-compose"></i>&nbsp;<FormattedMessage {...messages.newpost} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/settings" exact activeClassName="active" className="nav-link">
                <i className="ion-gear-a"></i>&nbsp;<FormattedMessage {...messages.settings} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/@${currentUser.username}`}
                className="nav-link">
                {currentUser.username}
              </NavLink>
            </li>
          </ul>
        </div>  
      </nav>
    );
  }
}

LogoutHeader.propTypes = {

};

export default LogoutHeader;
