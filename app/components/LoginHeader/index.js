/**
*
* LoginHeader
*
*/

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const LoginHeader = () => {
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
            <NavLink to="/signin" exact activeClassName="active" className="nav-link">
              <FormattedMessage {...messages.signin} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signup" exact activeClassName="active" className="nav-link">
              <FormattedMessage {...messages.signup} />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

LoginHeader.propTypes = {

};

export default LoginHeader;
