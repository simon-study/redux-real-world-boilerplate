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
)

export default makeSelectSettingsContainer;
export {
  selectSettingsContainerDomain,
  makeSelectLoggedIn
};
