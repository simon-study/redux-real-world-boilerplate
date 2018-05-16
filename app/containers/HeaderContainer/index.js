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
import makeSelectHeaderContainer, { makeSelectAuth } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Header from '../../components/Header';

export class HeaderContainer extends React.Component {
  render() {
    return (
      <Header loggedIn={this.props.auth.loggedIn} />
    );
  }
}

HeaderContainer.propTypes = {
  
};

const mapStateToProps = createStructuredSelector({
  headercontainer: makeSelectHeaderContainer(),
  auth: makeSelectAuth(),
});

function mapDispatchToProps(dispatch) {
  return {
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
