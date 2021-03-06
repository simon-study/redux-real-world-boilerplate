import { createSelector } from 'reselect';

/**
 * Direct selector to the articleDetailContainer state domain
 */
const selectArticleDetailContainerDomain = (state) => state.get('articleDetailContainer');
const selectAuth = (state) => state.get('auth');

const makeSelectArticleDetailContainer = () => createSelector(
  selectArticleDetailContainerDomain,
  (substate) => substate.toJS()
);

const selectArticleDetails = () => createSelector(
  makeSelectArticleDetailContainer(),
  (substate) => substate.article
);

const selectComments = () => createSelector(
  makeSelectArticleDetailContainer(),
  (substate) => substate.comments
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
  selectArticleDetailContainerDomain,
  (substate) => substate.get('redirectTo')
);

const selectLoggedIn = () => createSelector(
  selectAuth,
  (substate) => substate.get('loggedIn')
);

const selectLoading = () => createSelector(
  selectArticleDetailContainerDomain,
  (substate) => substate.get('isLoading')
);

export default makeSelectArticleDetailContainer;
export {
  selectArticleDetailContainerDomain,
  selectArticleDetails,
  selectComments,
  selectAuth,
  selectCurrentUser,
  selectRedirect,
  selectLoggedIn,
  selectLoading,
};
