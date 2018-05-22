import { createSelector } from 'reselect';

/**
 * Direct selector to the settingsContainer state domain
 */
const selectSettingsContainerDomain = (state) => state.get('settingsContainer');
const selectLoginContainerDomain = (state) => state.get('loginContainerReducer');

const makeSelectSettingsContainer = () => createSelector(
  selectSettingsContainerDomain,
  (substate) => substate.toJS()
);

const makeSelectLoggedIn = () => createSelector(
  selectLoginContainerDomain,
  (substate) => substate.toJS()
);

const selectCurrentUser = () => createSelector(
  makeSelectLoggedIn(),
  (substate) => substate.currentUser
);

const selectRedirect = () => createSelector(
  selectSettingsContainerDomain,
  (substate) => substate.get('redirect')
);

export default makeSelectSettingsContainer;
export {
  selectSettingsContainerDomain,
  makeSelectLoggedIn,
  selectCurrentUser,
  selectRedirect,
};
