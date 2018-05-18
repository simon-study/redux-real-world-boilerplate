import { createSelector } from 'reselect';

/**
 * Direct selector to the profileContainer state domain
 */
const selectProfileContainerDomain = (state) => state.get('profileContainer');

const makeSelectProfileContainer = () => createSelector(
  selectProfileContainerDomain,
  (substate) => substate.toJS()
);

const makeSelectError = () => createSelector(
  selectProfileContainerDomain,
  (substate) => substate.get('error')
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

export default makeSelectProfileContainer;
export {
  selectProfileContainerDomain,
  makeSelectProfile,
  makeSelectError,
  makeSelectArticlesByAuthor,
  makeSelectArticlesCountByAuthor,
};
