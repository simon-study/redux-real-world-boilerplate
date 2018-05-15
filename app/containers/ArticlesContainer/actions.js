/*
 *
 * Test actions
 *
 */

import {
  FETCH_TAGS, FETCH_DATA,
  FETCH_ARTICLES_OFFSET, FETCH_ARTICLES_TAGS,
  RESET_TAGNAME,
} from './constants';

export function fetchTags() {
  return {
    type: FETCH_TAGS,
  };
}

export function fetchData() {
  return {
    type: FETCH_DATA,
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
