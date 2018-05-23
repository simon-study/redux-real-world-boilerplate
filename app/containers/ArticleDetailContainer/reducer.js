/*
 *
 * ArticleDetailContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  RESET_ARTICLE,
  FETCH_ARTICLE_DETAIL_SUCCESS,
  FETCH_ARTICLE_DETAIL_FAILURE,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  RESET_COMMENTS,
  DELETE_ARTICLE_SUCCESS,
  REDIRECT_PAGE,
  FAVORITE_ON_ARTICLE_DETAIL_SUCCESS,
} from './constants';

const initialState = fromJS({
  article: {},
  comments: [],
  error: {},
  redirectTo: '',
});

function articleDetailContainerReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLE_DETAIL_SUCCESS:
      return state.set('article', fromJS(action.payload.article));
    case FETCH_ARTICLE_DETAIL_FAILURE:
      return state.set('error', action.payload.error);
    case RESET_ARTICLE:
      return state
        .set('article', {})
        .set('redirectTo', '')
        .set('error', {});
    case FETCH_COMMENTS_SUCCESS:
      return state.set('comments', fromJS(action.payload.comments));
    case FETCH_COMMENTS_FAILURE:
      return state.set('error', action.payload.error);
    case RESET_COMMENTS:
      return state.set('comments', []);
    case DELETE_ARTICLE_SUCCESS:
      return state
        .set('article', {})
        .set('redirectTo', '/');
    case REDIRECT_PAGE:
      return state.set('redirectTo', '/signup');
    case 'FAVORITE_ON_ARTICLE_DETAIL_SUCCESS':
      return state
        .setIn(['article', 'favorited'], action.payload.article.favorited)
        .setIn(['article', 'favoritesCount'], action.payload.article.favoritesCount);
    case 'TOGGLE_FOLLOW_SUCCESS':
      return state
        .setIn(['article', 'author', 'following'], action.payload.profile.following);
    case 'SUBMIT_COMMENT_SUCCESS':
      return state.updateIn(['comments'], arr => arr.push(action.payload.comment));
    case 'DELETE_COMMENT_SUCCESS':
    default:
      return state;
  }
}

export default articleDetailContainerReducer;
