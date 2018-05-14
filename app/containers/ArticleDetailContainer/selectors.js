import { createSelector } from 'reselect';

/**
 * Direct selector to the articleDetailContainer state domain
 */
const selectArticleDetailContainerDomain = (state) => state.get('articleDetailContainer');

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

export default makeSelectArticleDetailContainer;
export {
  selectArticleDetailContainerDomain,
  selectArticleDetails,
  selectComments,
};
