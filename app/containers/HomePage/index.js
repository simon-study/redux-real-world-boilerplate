/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Switch, Route } from 'react-router-dom';
import HeaderLogout from '../../components/HeaderLogout';
import Footer from '../../components/Footer';
import Home from '../../components/Home';
import SignIn from '../../components/SignIn';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <HeaderLogout />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
          </Switch>         
        <Footer />
      </div>
    );
  }
}
