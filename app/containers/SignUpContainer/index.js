/**
 *
 * SignUpContainer
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
import makeSelectSignUpContainer, { makeSelectLoggedIn } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import SignUp from '../../components/SignUp';
import { Redirect } from 'react-router-dom';

export class SignUpContainer extends React.Component {
  render() {
    return (
      this.props.loggedIn ? <Redirect to="/" /> :
      <SignUp submitRegister={(name, email, password) => this.props.submitRegister(name, email, password)} />
    );
  }
}

SignUpContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signupcontainer: makeSelectSignUpContainer(),
  loggedIn: makeSelectLoggedIn(),
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
