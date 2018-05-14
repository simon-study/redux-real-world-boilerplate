/*
 *
 * TagContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAILURE,
  FETCH_ARTICLES_TAG_SUCCESS,
  FETCH_ARTICLES_TAG_FAILURE,
} from './constants';

const initialState = fromJS({
  tags: [],
  error: null,
  articlesTag: [],
});

function tagContainerReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TAGS_SUCCESS:
      return state.set('tags', action.payload.tags);
    case FETCH_TAGS_FAILURE:
      return state.set('error', action.payload.error);
    case FETCH_ARTICLES_TAG_SUCCESS:
      return state.set('articlesTag', action.payload.articles);
    case FETCH_ARTICLES_TAG_FAILURE:
      return state.set('error', action.payload.error);
    default:
      return state;
  }
}

export default tagContainerReducer;
