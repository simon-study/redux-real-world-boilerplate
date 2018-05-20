/*
 *
 * LoginContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from './constants';

const initialState = fromJS({
  errors: {},
  loggedIn: false,
  currentUser: {},
});

function loginContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('currentUser', action.payload.user)
                  .set('loggedIn', true)
                  .set('errors', {});
    case LOGIN_FAILURE:
      return state.set('errors', action.payload.errors);
    case LOGOUT_SUCCESS:
      return state.set('loggedIn', false)
                  .set('currentUser', {});
    default:
      return state;
  }
}

export default loginContainerReducer;
