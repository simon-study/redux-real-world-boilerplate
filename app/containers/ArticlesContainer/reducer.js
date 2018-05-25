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
  FETCH_ARTICLES_TAG_SUCCESS,
  FETCH_ARTICLES_TAG_FAILURE,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAILURE,
  RESET_TAGNAME,
  REDIRECT_TO_SIGNUP,
  FAVORITE_SUCCESS,
  RESET_REDIRECT,
  GET_LIST_ARTICLE_SUCCESS,
  SET_TAB,
} from './constants';

const initialState = fromJS({
  articles: [],
  tags: [],
  articlesTag: [],
  articlesCount: 0,
  currentPage: 0,
  error: null,
  tagName: '',
  redirectTo: '',
  tab: window.localStorage.getItem('token') ? 'feed' : 'all',
});

function testReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return state
        .set('articles', action.payload.articles)
        .set('articlesCount', action.payload.articlesCount)
        .set('currentPage', 0);
    case FETCH_DATA_FAILURE:
      return state.set('error', action.payload.error);
    case FETCH_ARTICLES_OFFSET_SUCCESS:
      return state
        .set('articles', action.payload.data.articles)
        .set('currentPage', action.payload.page);
    case FETCH_ARTICLES_OFFSET_FAILURE:
      return state.set('error', action.payload.error);
    case FETCH_TAGS_SUCCESS:
      return state.set('tags', action.payload.tags);
    case FETCH_TAGS_FAILURE:
      return state.set('error', action.payload.error);
    case FAVORITE_SUCCESS:
      const responseArticle = action.payload.article;
      const newArticles = state.get('articles').map(article => {
        if (article.slug === responseArticle.slug) {
          return {
            ...article,
            favorited: responseArticle.favorited,
            favoritesCount: responseArticle.favoritesCount,
          };
        }
        return article;
      });
      return state.set('articles', newArticles);
    case FETCH_ARTICLES_TAG_SUCCESS:
      return state
        .set('articles', action.payload.data.articles)
        .set('articlesCount', action.payload.data.articlesCount)
        .set('currentPage', 0)
        .set('tagName', action.payload.tagName)
        .set('tab', '');
    case FETCH_ARTICLES_TAG_FAILURE:
      return state.set('error', action.payload.error);
    case RESET_TAGNAME:
      return state.set('tagName', '');
    case REDIRECT_TO_SIGNUP:
      return state.set('redirectTo', '/signup');
    case RESET_REDIRECT:
      return state.set('redirectTo', '');
    case GET_LIST_ARTICLE_SUCCESS:
      return state
        .set('articles', action.payload.articles)
        .set('articlesCount', action.payload.articlesCount)
        .set('currentPage', 0);
    case SET_TAB:
      return state.set('tab', action.payload);
    default:
      return state;
  }
}

export default testReducer;
