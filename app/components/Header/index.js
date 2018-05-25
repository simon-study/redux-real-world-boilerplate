/**
*
* Header
*
*/

import React from 'react';
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

Header.propTypes = {};

export default Header;
