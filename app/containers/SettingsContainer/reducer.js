/*
 *
 * SettingsContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  // loggedIn: window.localStorage.getItem('token') ? true : false
});

function settingsContainerReducer(state = initialState, action) {
  switch (action.type) {
    // case 'LOGOUT_SUCCESS':
    //   return state.set('loggedIn', false)
    default:
      return state;
  }
}

export default settingsContainerReducer;
