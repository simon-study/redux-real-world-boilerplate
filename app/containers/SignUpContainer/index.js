/**
 *
 * SignUpContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSignUpContainer, { makeSelectLoggedIn, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import SignUp from '../../components/SignUp';

const SignUpContainer = () => {
  return (
    this.props.loggedIn ? <Redirect to="/" /> :
    <SignUp
      errors={this.props.errors}
      submitRegister={(name, email, password) => this.props.submitRegister(name, email, password)}
    />
  );
};

SignUpContainer.propTypes = {};

const mapStateToProps = createStructuredSelector({
  signupcontainer: makeSelectSignUpContainer(),
  loggedIn: makeSelectLoggedIn(),
  errors: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    submitRegister: (name, email, password) => dispatch({ type: 'REGISTER_REQUEST', name, email, password }),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'signUpContainer', reducer });
const withSaga = injectSaga({ key: 'signUpContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignUpContainer);
