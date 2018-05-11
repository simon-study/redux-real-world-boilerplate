/*
 *
 * ArticleDetailContainer actions
 *
 */

import {
  RESET_ARTICLE,
  FETCH_ARTICLE_DETAIL,
} from './constants';

export function fetchArticleDetail(slug) {
  return {
    type: FETCH_ARTICLE_DETAIL,
    slug,
  }
}

export function resetArticle() {
  return {
    type: RESET_ARTICLE,
  }
}
