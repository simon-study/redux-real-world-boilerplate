import { createSelector } from 'reselect';

/**
 * Direct selector to the tagContainer state domain
 */
const selectTagContainerDomain = (state) => state.get('tags');

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

export default makeSelectTagContainer;
export {
  selectTagContainerDomain,
};
