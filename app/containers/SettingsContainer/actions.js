/*
 *
 * SettingsContainer actions
 *
 */

import {
  RESET,
  LOGOUT_REQUEST,
  UPDATE_PROFILE,
} from './constants';

export function logout() {
  return {
    type: LOGOUT_REQUEST,
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
