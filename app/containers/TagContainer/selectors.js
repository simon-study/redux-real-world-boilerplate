import { createSelector } from 'reselect';

/**
 * Direct selector to the tagContainer state domain
 */
const selectTagContainerDomain = (state) => state.get('TagContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TagContainer
 */

const makeSelectTagContainer = () => createSelector(
  selectTagContainerDomain,
  (substate) => substate.toJS()
);

const selectTags = () => createSelector(
  selectTagContainerDomain,
  (substate) => substate.get('tags')
)

export default makeSelectTagContainer;
export {
  selectTagContainerDomain,
  selectTags
};
