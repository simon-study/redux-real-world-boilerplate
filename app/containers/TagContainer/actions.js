/*
 *
 * TagContainer actions
 *
 */

import {
  FETCH_ARTICLES_TAGS,
} from './constants';

export function fetchListArticlesTag(tag) {
  return {
    type: 'FETCH_ARTICLES_TAGS',
    tag,
  }
}
