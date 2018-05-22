/*
 *
 * SettingsContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { UPDATE_PROFILE_SUCCESS, RESET } from './constants';
const initialState = fromJS({
  redirect: '',
});

function settingsContainerReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROFILE_SUCCESS:
      return state.set('redirect', `/profile/@${action.payload.user.username}`);
    case RESET:
      return state.set('redirect', '');
    default:
      return state;
  }
}

export default settingsContainerReducer;
