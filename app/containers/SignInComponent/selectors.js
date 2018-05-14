import { createSelector } from 'reselect';

/**
 * Direct selector to the signInComponent state domain
 */
const selectSignInComponentDomain = (state) => state.get('signInComponent');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignInComponent
 */

const makeSelectSignInComponent = () => createSelector(
  selectSignInComponentDomain,
  (substate) => substate.toJS()
);

export default makeSelectSignInComponent;
export {
  selectSignInComponentDomain,
};
