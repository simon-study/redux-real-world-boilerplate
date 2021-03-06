import { createSelector } from 'reselect';

/**
 * Direct selector to the profileContainer state domain
 */
const selectProfileContainerDomain = (state) => state.get('profileContainer');
const selectAuth = (state) => state.get('auth');

const makeSelectProfileContainer = () => createSelector(
  selectProfileContainerDomain,
  (substate) => substate.toJS()
);

const makeSelectError = () => createSelector(
  makeSelectProfileContainer(),
  (substate) => substate.errors
);

const makeSelectProfile = () => createSelector(
  makeSelectProfileContainer(),
  (substate) => substate.profile
);

const makeSelectArticlesByAuthor = () => createSelector(
  makeSelectProfileContainer(),
  (substate) => substate.articlesByAuthor
);

const makeSelectArticlesCountByAuthor = () => createSelector(
  selectProfileContainerDomain,
  (substate) => substate.get('articlesCountByAuthor')
);

const makeSelectAuth = () => createSelector(
  selectAuth,
  (substate) => substate.toJS()
);

const selectCurrentUser = () => createSelector(
  makeSelectAuth(),
  (substate) => substate.currentUser
);

const selectRedirect = () => createSelector(
  selectProfileContainerDomain,
  (substate) => substate.get('redirectTo')
);

export default makeSelectProfileContainer;
export {
  selectProfileContainerDomain,
  makeSelectProfile,
  makeSelectError,
  makeSelectArticlesByAuthor,
  makeSelectArticlesCountByAuthor,
  makeSelectAuth,
  selectCurrentUser,
  selectRedirect,
};
