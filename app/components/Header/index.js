/**
*
* Header
*
*/

import React from 'react';
import { NavLink } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import LogoutHeader from '../LogoutHeader';
import LoginHeader from '../LoginHeader';

class Header extends React.Component {
  render() {
    const { loggedIn, currentUser } = this.props;
    return (
      !loggedIn ? <LoginHeader /> : <LogoutHeader currentUser={currentUser}/>
    );
  }
}

Header.propTypes = {

};

export default Header;
