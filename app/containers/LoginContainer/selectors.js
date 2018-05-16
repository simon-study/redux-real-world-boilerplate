import { createSelector } from 'reselect';

/**
 * Direct selector to the loginContainer state domain
 */
const selectLoginContainerDomain = (state) => state.get('loginContainer');

const makeSelectLoginContainer = () => createSelector(
  selectLoginContainerDomain,
  (substate) => substate.toJS()
);

const selectLoggedIn = () => createSelector(
  selectLoginContainerDomain,
  (substate) => substate.get('loggedIn')
)

const selectErrors = () => createSelector(
  selectLoginContainerDomain,
  (substate) => substate.errors
)

export default makeSelectLoginContainer;
export {
  selectLoginContainerDomain,
  selectLoggedIn,
  selectErrors,
};
