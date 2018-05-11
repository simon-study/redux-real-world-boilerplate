/*
 *
 * TagContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  // DEFAULT_ACTION,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAILURE,
} from './constants';

const initialState = fromJS({
  tags: [],
  error: null,
});

function tagContainerReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TAGS_SUCCESS:
      return state.set('tags', action.payload.tags);
    case FETCH_TAGS_FAILURE:
      return state.set('error', action.payload.error);
    default:
      return state;
  }
}

export default tagContainerReducer;
