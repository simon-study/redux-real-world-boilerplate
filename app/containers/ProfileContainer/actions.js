/*
 *
 * ProfileContainer actions
 *
 */

import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_ARTICLES_BY_AUTHOR_SUCCESS,
  GET_ARTICLES_BY_AUTHOR_FAILURE,
  TOGGLE_FOLLOWING_SUCCESS,
  TOGGLE_FOLLOWING_FAILURE,
  TOGGLE_ARTICLES_SUCCESS,
  TOGGLE_ARTICLES_FAILURE,
  FAVORITE_IN_PROFILE_SUCCESS,
  FAVORITE_IN_PROFILE_FAILURE,
} from './constants';

export function getProfileSuccess(response) {
  return {
    type: GET_PROFILE_SUCCESS,
    payload: response,
  };
}

export function getProfileFailure(error) {
  return {
    type: GET_PROFILE_FAILURE,
    payload: error,
  };
}

export function getArticlesByAuthorSuccess(response) {
  return {
    type: GET_ARTICLES_BY_AUTHOR_SUCCESS,
    payload: response,
  };
}

export function getArticlesByAuthorFailure(error) {
  return {
    type: GET_ARTICLES_BY_AUTHOR_FAILURE,
    payload: error,
  };
}

export function toggleFollowSuccess(response) {
  return {
    type: TOGGLE_FOLLOWING_SUCCESS,
    payload: response.data,
  };
}

export function toggleFollowFailure(error) {
  return {
    type: TOGGLE_FOLLOWING_FAILURE,
    payload: error.response.data,
  };
}

export function toggleFavoriteSuccess(response) {
  return {
    type: FAVORITE_IN_PROFILE_SUCCESS,
    payload: response.data,
  };
}

export function toggleFavoriteFailure(error) {
  return {
    type: FAVORITE_IN_PROFILE_FAILURE,
    payload: error.response.data,
  };
}

export function toggleArticleByAuthorSuccess(response) {
  return {
    type: TOGGLE_ARTICLES_SUCCESS,
    payload: response.data,
  };
}

export function toggleArticleByAuthorFailure(error) {
  return {
    type: TOGGLE_ARTICLES_FAILURE,
    payload: error.response.data,
  };
}
