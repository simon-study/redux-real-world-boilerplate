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
} from './constants';

export function getProfileSuccess(response) {
  return {
    type: GET_PROFILE_SUCCESS,
    payload: response,
  }
}

export function getProfileFailure(error) {
  return {
    type: GET_PROFILE_FAILURE,
    payload: error,
  }
}

export function getArticlesByAuthorSuccess(response) {
  return {
    type: GET_ARTICLES_BY_AUTHOR_SUCCESS,
    payload: response,
  }
}

export function getArticlesByAuthorFailure(error) {
  return {
    type: GET_ARTICLES_BY_AUTHOR_FAILURE,
    payload: error,
  }
}
