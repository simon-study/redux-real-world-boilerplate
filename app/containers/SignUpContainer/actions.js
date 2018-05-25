/*
 *
 * SignUpContainer actions
 *
 */

import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './constants';

export function registerSuccess(response) {
  return {
    type: REGISTER_SUCCESS,
    payload: response.data,
  };
}

export function registerFailure(error) {
  return {
    type: REGISTER_FAILURE,
    payload: error.response.data,
  };
}
