/*
 *
 * HeaderContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILURE,
} from './constants';

const initialState = fromJS({
  currentUser: {},
  error: null,
});

function headerContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_USER_SUCCESS:
      return state.set('currentUser', action.payload.user);
    case GET_CURRENT_USER_FAILURE:
      return state.set('error', action.payload.error);
    default:
      return state;
  }
}

export default headerContainerReducer;
