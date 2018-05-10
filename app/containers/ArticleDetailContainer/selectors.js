import { createSelector } from 'reselect';

/**
 * Direct selector to the articleDetailContainer state domain
 */
const selectArticleDetailContainerDomain = (state) => state.get('article');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ArticleDetailContainer
 */

const makeSelectArticleDetailContainer = () => createSelector(
  selectArticleDetailContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectArticleDetailContainer;
export {
  selectArticleDetailContainerDomain,
};
