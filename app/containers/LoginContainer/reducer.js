/*
 *
 * LoginContainer reducer
 *
 */

import { fromJS } from 'immutable';
// import { Redirect } from 'react-router';
// import {
//   DEFAULT_ACTION,
// } from './constants';

const initialState = fromJS({
  errors: {},
  loggedIn: false,
  currentUser: {},
});

function loginContainerReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return state.set('currentUser', action.payload.user)
                  .set('loggedIn', true);
    case 'LOGIN_FAILURE':
      return state.set('errors', action.payload.response.data.errors);
    case 'LOGOUT_SUCCESS':
      return state.set('loggedIn', false)
                  .set('currentUser', {});
    default:
      return state;
  }
}

export default loginContainerReducer;