/**
 *
 * SettingsContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSettingsContainer, {
  makeSelectLoggedIn,
  selectCurrentUser,
  selectRedirect,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import Settings from '../../components/Settings';
import { logout, updateProfile } from './actions';

export class SettingsContainer extends React.Component {
  render() {
    if (!this.props.loggedIn.loggedIn) {
      return <Redirect to={'/'} />;
    }
    
    if (this.props.redirect.length) {
      console.log(this.props.redirect);
      return <Redirect to={`${this.props.redirect}`} />
    }
    
    return (
      <Settings
        onClickLogout={this.props.handleLogout}
        currentUser={this.props.currentUser}
        updateProfile={this.props.updateProfile}
      />
    );
  }
}

SettingsContainer.propTypes = {
  loggedIn: PropTypes.any.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  settingscontainer: makeSelectSettingsContainer(),
  loggedIn: makeSelectLoggedIn(),
  currentUser: selectCurrentUser(),
  redirect: selectRedirect(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleLogout: () => dispatch(logout()),
    updateProfile: (user) => dispatch(updateProfile(user)),
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
