/**
 *
 * SettingsContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSettingsContainer, { makeSelectLoggedIn } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Settings from '../../components/Settings';

export class SettingsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props.loggedIn.loggedIn);
    if (!this.props.loggedIn.loggedIn) {
      return <Redirect to={'/'} />;
    }
    return (
      <Settings onClickLogout={this.props.handleLogout} />
    );
  }
}

SettingsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  settingscontainer: makeSelectSettingsContainer(),
  loggedIn: makeSelectLoggedIn(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleLogout: () => dispatch({ type: 'LOGOUT_REQUEST' }),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'settingsContainer', reducer });
const withSaga = injectSaga({ key: 'settingsContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SettingsContainer);
