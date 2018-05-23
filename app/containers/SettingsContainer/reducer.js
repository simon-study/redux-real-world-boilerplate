/*
 *
 * SettingsContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  RESET,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from './constants';
const initialState = fromJS({
  redirect: '',
  errors: {},
});

function settingsContainerReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROFILE_SUCCESS:
      return state.set('redirect', `/profile/@${action.payload.user.username}`)
                  .set('errors', {});
    case UPDATE_PROFILE_FAILURE:
      return state.set('errors', action.payload.errors);
    case 'RESET_ERRORS':
      return state.set('errors', {});
    case RESET:
      return state.set('redirect', '');
    default:
      return state;
  }
}

export default settingsContainerReducer;
