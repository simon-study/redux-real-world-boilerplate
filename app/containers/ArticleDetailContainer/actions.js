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
