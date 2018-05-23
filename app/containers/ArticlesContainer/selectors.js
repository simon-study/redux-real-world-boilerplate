import { createSelector } from 'reselect';

/**
 * Direct selector to the test state domain
 */

const selectArticlesContainerDomain = (state) => state.get('articlesContainer');
const selectAuth = (state) => state.get('auth');

const makeSelectArticlesContainer = () => createSelector(
  selectArticlesContainerDomain,
  (substate) => substate.toJS()
);

const selectArticles = () => createSelector(
  selectArticlesContainerDomain,
  (substate) => substate.get('articles')
);

const selectArticlesCount = () => createSelector(
  selectArticlesContainerDomain,
  (substate) => substate.get('articlesCount')
);

const selectCurrentPage = () => createSelector(
  selectArticlesContainerDomain,
  (substate) => substate.get('currentPage')
);

const selectTags = () => createSelector(
  selectArticlesContainerDomain,
  (substate) => substate.get('tags')
);

const selectArticlesTag = () => createSelector(
  selectArticlesContainerDomain,
  (substate) => substate.get('articlesTag')
);

const selectTagName = () => createSelector(
  selectArticlesContainerDomain,
  (substate) => substate.get('tagName')
);

const makeAuth = () => createSelector(
  selectAuth,
  (substate) => substate.toJS()
);

const selectRedirectTo = () => createSelector(
  selectArticlesContainerDomain,
  (substate) => substate.get('redirectTo')
);

export default makeSelectArticlesContainer;
export {
  selectArticlesContainerDomain,
  makeAuth,
  selectArticles,
  selectArticlesCount,
  selectCurrentPage,
  selectTags,
  selectArticlesTag,
  selectTagName,
  selectRedirectTo,
};
