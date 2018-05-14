/*
 *
 * Test reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_ARTICLES_OFFSET_SUCCESS,
  FETCH_ARTICLES_OFFSET_FAILURE,
} from './constants';

const initialState = fromJS({
  articles: [],
  tags: [],
  articlesTag: [],
  articlesCount: 0,
  currentPage: 0,
  error: null,
});

function testReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return state.set('articles', action.payload.articles)
                  .set('articlesCount', action.payload.articlesCount)
                  .set('currentPage', 0);
    case FETCH_DATA_FAILURE:
      return state.set('error', action.payload.error);
    case FETCH_ARTICLES_OFFSET_SUCCESS:
      return state.set('articles', action.payload.data.articles)
                  .set('currentPage', action.payload.page);
    case FETCH_ARTICLES_OFFSET_FAILURE:
      return state.set('error', action.payload.error);
    case 'FETCH_TAGS_SUCCESS':
      return state.set('tags', action.payload.tags);
    case 'FETCH_TAGS_FAILURE':
      return state.set('error', action.payload.error);
    case 'FETCH_ARTICLES_TAG_SUCCESS':
      return state.set('articles', action.payload.articles)
                  .set('articlesCount', action.payload.articlesCount)
                  .set('currentPage', 0);
    case 'FETCH_ARTICLES_TAG_FAILURE':
      return state.set('error', action.payload.error);
    default:
      return state;
  }
}

export default testReducer;
