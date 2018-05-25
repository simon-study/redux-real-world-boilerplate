/*
 *
 * SettingsContainer actions
 *
 */

import {
  RESET,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  UPDATE_CURRENT_USER,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from './constants';

export function logout() {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function updateProfile(user) {
  return {
    type: UPDATE_PROFILE,
    user,
  };
}

export function resetSetting() {
  return {
    type: RESET,
  };
}

export function updateProfileSuccess(response) {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: response.data,
  };
}

export function updateProfileFailure(error) {
  return {
    type: UPDATE_PROFILE_FAILURE,
    payload: error.response.data,
  };
}

export function updateCurrentUser(response) {
  return {
    type: UPDATE_CURRENT_USER,
    payload: response.data,
  };
}
