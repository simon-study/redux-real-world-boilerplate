/**
 *
 * LoginContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginContainer, { selectLoggedIn, selectErrors } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import SignIn from '../../components/SignIn';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

export class LoginContainer extends React.Component {
  render() {
    const from = { pathname: "/" };
    if (this.props.loggedIn) {
      return <Redirect to={from} />;
    }
    
    return (
      <SignIn 
        handleLogin={(email, password) => this.props.handleLogin(email, password)}
        errors={this.props.logincontainer.errors}
      />
    );
  }
}

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  logincontainer: makeSelectLoginContainer(),
  loggedIn: selectLoggedIn(),
  errors: selectErrors(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleLogin: (email, password) => dispatch({ 
      type: 'LOGIN_REQUEST', 
      users: {
        email, 
        password,
      },
    }),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps, null, {pure: false});
const withReducer = injectReducer({ key: 'loginContainer', reducer });
const withSaga = injectSaga({ key: 'loginContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginContainer);
