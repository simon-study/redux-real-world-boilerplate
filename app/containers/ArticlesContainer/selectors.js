import { createSelector } from 'reselect';

/**
 * Direct selector to the test state domain
 */
const selectArticlesContainerDomain = (state) => state.get('articlesContainer');

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

export default makeSelectArticlesContainer;
export {
  selectArticlesContainerDomain,
  selectArticles,
  selectArticlesCount,
  selectCurrentPage,
  selectTags,
  selectArticlesTag,
};
