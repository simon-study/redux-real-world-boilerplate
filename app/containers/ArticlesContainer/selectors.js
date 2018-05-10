import { createSelector } from 'reselect';

/**
 * Direct selector to the test state domain
 */
const getArticles = (state) => state.get('articles');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Test
 */

const makeSelectTest = () => createSelector(
  getArticles,
  (substate) => substate.toJS()
);

export default makeSelectTest;
export {
  getArticles,
};
