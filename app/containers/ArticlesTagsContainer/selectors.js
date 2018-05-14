import { createSelector } from 'reselect';

/**
 * Direct selector to the articlesTagsContainer state domain
 */
const selectArticlesTagsContainerDomain = (state) => state.get('articlesTagsContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ArticlesTagsContainer
 */

const makeSelectArticlesTagsContainer = () => createSelector(
  selectArticlesTagsContainerDomain,
  (substate) => substate.toJS()
);

const selectArticlesTag = () => createSelector(
  selectArticlesTagsContainerDomain,
  (substate) => substate.get('articlesTag')
);

export default makeSelectArticlesTagsContainer;
export {
  selectArticlesTagsContainerDomain,
  selectArticlesTag,
};
