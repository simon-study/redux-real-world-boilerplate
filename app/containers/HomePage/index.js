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
import { Switch, Route } from 'react-router-dom';
import Footer from '../../components/Footer';
import LoginContainer from '../../containers/LoginContainer';
import SignUp from '../../components/SignUp';
import MainHomepage from '../../components/MainHomepage';
import ArticleDetailContainer from '../ArticleDetailContainer';
import HeaderContainer from '../HeaderContainer';
import SettingsContainer from '../SettingsContainer';

const HomePage = () => (
  <div>
    <HeaderContainer />
    <Switch>
      <Route exact path="/" component={MainHomepage} />
      <Route path="/signin" component={LoginContainer} />
      <Route path="/signup" component={SignUp} />
      <Route path="/settings" component={SettingsContainer} />
      <Route path="/article/:slug" component={ArticleDetailContainer} />
    </Switch>
    <Footer />
  </div>
);

export default HomePage;
