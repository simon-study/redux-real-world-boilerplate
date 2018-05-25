/*
 *
 * ProfileContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_ARTICLES_BY_AUTHOR_SUCCESS,
  GET_ARTICLES_BY_AUTHOR_FAILURE,
  RESET_PROFILE_BY_AUTHOR,
  RESET_ARTICLES_BY_AUTHOR,
} from './constants';

const initialState = fromJS({
  profile: {},
  errors: {},
  articlesByAuthor: [],
  articlesCountByAuthor: 0,
  redirectTo: '',
});

function profileContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return state.set('profile', fromJS(action.payload.profile));
    case GET_PROFILE_FAILURE:
      return state.set('errors', action.payload);
    case GET_ARTICLES_BY_AUTHOR_SUCCESS:
      return state.set('articlesByAuthor', action.payload.articles)
                  .set('articlesCountByAuthor', action.payload.articlesCount);
    case GET_ARTICLES_BY_AUTHOR_FAILURE:
      return state.set('errors', action.payload);
    case RESET_PROFILE_BY_AUTHOR:
      return state.set('profile', {});
    case RESET_ARTICLES_BY_AUTHOR:
      return state.set('articlesByAuthor', []);
    case 'FAVORITE_IN_PROFILE_SUCCESS':
      const responseArticle = action.payload.article;
      const newArticles = state.get('articlesByAuthor').map(article => {
        if (article.slug === responseArticle.slug) {
          return {
            ...article,
            favorited: responseArticle.favorited,
            favoritesCount: responseArticle.favoritesCount,
          };
        }
        return article;
      });
      return state.set('articlesByAuthor', newArticles);
    case 'TOGGLE_FOLLOW_SUCCESS':
      return state.setIn(['profile', 'following'], action.payload.profile.following);
    case 'REDIRECT_PAGE':
      return state.set('redirectTo', '/signup');
    case 'TOGGLE_ARTICLES_SUCCESS':
      return state.set('articlesByAuthor', action.payload.articles);
    default:
      return state;
  }
}

export default profileContainerReducer;
