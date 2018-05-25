/*
 *
 * Test actions
 *
 */

import {
  FETCH_TAGS,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAILURE,
  FETCH_DATA,
  FETCH_ARTICLES_OFFSET,
  FETCH_ARTICLES_TAGS,
  RESET_TAGNAME,
  GET_FEED_ARTICLES,
  FAVORITE_SUCCESS,
  FAVORITE_FAILURE,
} from './constants';

export function fetchTags() {
  return {
    type: FETCH_TAGS,
  };
}

export function getAllArticles() {
  return {
    type: FETCH_DATA,
  };
}

export function getFeedArticles() {
  return {
    type: GET_FEED_ARTICLES,
  };
}

export function setPage(page) {
  return {
    type: FETCH_ARTICLES_OFFSET,
    page,
  };
}

export function fetchListArticlesTag(tag) {
  return {
    type: FETCH_ARTICLES_TAGS,
    tag,
  };
}

export function resetTagName() {
  return {
    type: RESET_TAGNAME,
  };
}

export function favoriteSuccess(response) {
  return {
    type: FAVORITE_SUCCESS,
    payload: response.data,
  };
}

export function favoriteFailure(error) {
  return {
    type: FAVORITE_FAILURE,
    payload: error.response.data,
  };
}

export function fetchTagsSuccess(response) {
  return {
    type: FETCH_TAGS_SUCCESS,
    payload: response.data,
  };
}

export function fetchTagsFailure(error) {
  return {
    type: FETCH_TAGS_FAILURE,
    payload: error.response.data,
  };
}
