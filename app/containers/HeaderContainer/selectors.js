import { createSelector } from 'reselect';

/**
 * Direct selector to the headerContainer state domain
 */
const selectHeaderContainerDomain = (state) => state.get('headerContainer');
const selectAuth = (state) => state.get('auth');

const makeSelectHeaderContainer = () => createSelector(
  selectHeaderContainerDomain,
  (substate) => substate.toJS()
);

const makeSelectAuth = () => createSelector(
  selectAuth,
  (substate) => substate.toJS()
);

const makeSelectCurrentUser = () => createSelector(
  makeSelectAuth(),
  (substate) => substate.currentUser
);

const makeSelectLoggedIn = () => createSelector(
  makeSelectAuth(),
  (substate) => substate.loggedIn
);

export default makeSelectHeaderContainer;
export {
  selectHeaderContainerDomain,
  makeSelectAuth,
  makeSelectCurrentUser,
  makeSelectLoggedIn,
};
