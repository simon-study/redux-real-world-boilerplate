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
  user: {},
  error: null,
  loggedIn: false,
});

function loginContainerReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      if (action.payload && action.payload.token) {
        window.localStorage.setItem('token', action.payload.token)
      }
      return state.set('user', action.payload.user)
                  .set('loggedIn', true);
    case 'LOGIN_FAILURE':
      return state.set('error', action.payload.error);
    default:
      return state;
  }
}

export default loginContainerReducer;
