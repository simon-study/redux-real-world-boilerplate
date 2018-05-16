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
  loggedIn: window.localStorage.getItem('token') ? true : false,
});

function loginContainerReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return state.set('loggedIn', true);
    case 'LOGIN_FAILURE':
      return state.set('errors', action.payload.response.data.errors);
    case 'LOGOUT_SUCCESS':
      return state.set('loggedIn', false);
    default:
      return state;
  }
}

export default loginContainerReducer;
