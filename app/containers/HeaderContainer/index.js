/**
 *
 * HeaderContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHeaderContainer, { makeSelectLoggedIn, makeSelectCurrentUser } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Header from '../../components/Header';

export class HeaderContainer extends React.Component {
  componentWillMount() {
    const token = window.localStorage.getItem('token');
    if (token) {
      this.props.getCurrentUser(token);
    }
  }

  render() {
    return (
      <Header loggedIn={this.props.loggedIn} currentUser={this.props.currentUser} />
    );
  }
}

HeaderContainer.propTypes = {
  getCurrentUser: PropTypes.func.isRequired,
  loggedIn: PropTypes.any.isRequired,
  currentUser: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  headercontainer: makeSelectHeaderContainer(),
  loggedIn: makeSelectLoggedIn(),
  currentUser: makeSelectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    getCurrentUser: (token) => dispatch({ type: 'GET_CURRENT_USER', token }),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps, null, { pure: false });
const withReducer = injectReducer({ key: 'headerContainer', reducer });
const withSaga = injectSaga({ key: 'headerContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HeaderContainer);
