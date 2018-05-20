import { createSelector } from 'reselect';

/**
 * Direct selector to the signUpContainer state domain
 */
const selectSignUpContainerDomain = (state) => state.get('signUpContainer');
const selectLoginContainer = (state) => state.get('auth');

const makeSelectSignUpContainer = () => createSelector(
  selectSignUpContainerDomain,
  (substate) => substate.toJS()
);

const makeSelectAuth = () => createSelector(
  selectLoginContainer,
  (substate) => substate.toJS()
);

const makeSelectLoggedIn = () => createSelector(
  selectLoginContainer,
  (substate) => substate.get('loggedIn')
);

const makeSelectError = () => createSelector(
  makeSelectSignUpContainer(),
  (substate) => substate.errors
);

export default makeSelectSignUpContainer;
export {
  selectSignUpContainerDomain,
  makeSelectAuth,
  makeSelectLoggedIn,
  makeSelectError,
};
