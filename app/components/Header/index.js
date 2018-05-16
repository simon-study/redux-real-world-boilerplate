/**
*
* Header
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
  )
}

const LogoutHeader = () => {
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
            <NavLink to="/newpost" exact activeClassName="active" className="nav-link">
               <i className="ion-compose"></i>&nbsp;<FormattedMessage {...messages.newpost} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/settings" exact activeClassName="active" className="nav-link">
              <i className="ion-gear-a"></i>&nbsp;<FormattedMessage {...messages.settings} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/username" exact activeClassName="active" className="nav-link">
              Kelvin
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink
              to={`/@${props.currentUser.username}`}
              className="nav-link">
              <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} />
              {props.currentUser.username}
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

class Header extends React.Component {
  render() {
    return (      
      !this.props.loggedIn ? <LoginHeader/> : <LogoutHeader/>
    );
  }
}

Header.propTypes = {

};

export default Header;
