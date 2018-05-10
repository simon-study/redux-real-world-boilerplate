/*
 *
 * ArticleDetailContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_ARTICLE_DETAIL_SUCCESS,
  FETCH_ARTICLE_DETAIL_FAILURE,
} from './constants';

const initialState = fromJS({
  article: {},
  error: null,
});

function articleDetailContainerReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLE_DETAIL_SUCCESS:
      return state.set('article', action.payload.article);
    case FETCH_ARTICLE_DETAIL_FAILURE:
      return state.set('error', action.payload.error);
    default:
      return state;
  }
}

export default articleDetailContainerReducer;
