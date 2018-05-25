/*
 *
 * ArticleDetailContainer actions
 *
 */

import {
  RESET_ARTICLE,
  FETCH_ARTICLE_DETAIL,
  FETCH_COMMENTS,
  RESET_COMMENTS,
  DELETE_ARTICLE,
  SUBMIT_COMMENT_SUCCESS,
  SUBMIT_COMMENT_FAILURE,
  DELETE_COMMENT_SUCCESS,
} from './constants';

export function fetchArticleDetail(slug) {
  return {
    type: FETCH_ARTICLE_DETAIL,
    slug,
  };
}

export function resetArticle() {
  return {
    type: RESET_ARTICLE,
  };
}

export function fetchComments(slug) {
  return {
    type: FETCH_COMMENTS,
    slug,
  };
}

export function resetComments() {
  return {
    type: RESET_COMMENTS,
  };
}

export function deleteArticle(slug) {
  return {
    type: DELETE_ARTICLE,
    slug,
  };
}

export const submitCommentSuccess = (response) => ({
  type: SUBMIT_COMMENT_SUCCESS,
  payload: response.data,
});

export const submitCommentError = (error) => ({
  type: SUBMIT_COMMENT_FAILURE,
  payload: error.response.data,
});

export const deleteCommentSuccess = (id) => ({
  type: DELETE_COMMENT_SUCCESS,
  payload: id,
});

export const deleteCommentError = (error) => ({
  type: DELETE_COMMENT_FAILURE,
  payload: error.response.data,
});
