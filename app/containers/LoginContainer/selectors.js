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

export default makeSelectLoginContainer;
export {
  selectLoginContainerDomain,
  selectLoggedIn,
};
