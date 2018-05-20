/*
 *
 * LoginContainer actions
 *
 */

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './constants';

export function loginSuccess(response) {
  return {
    type: LOGIN_SUCCESS,
    payload: response,
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
}
