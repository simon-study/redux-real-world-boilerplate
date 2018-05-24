/*
 *
 * EditorContainer actions
 *
 */

import {
  CHANGE_TITLE,
  CHANGE_DESC,
  CHANGE_BODY,
  CHANGE_TAG,
  ADD_TAG,
  RESET_TAG,
  NEW_ARTICLE,
  RESET_NEW_ARTICLE,
} from './constants';

export function changeTitle(title) {
  return {
    type: CHANGE_TITLE,
    title
  };
}

export function changeDescription(description) {
  return {
    type: CHANGE_DESC,
    description,
  };
}

export function changeBody(body) {
  return {
    type: CHANGE_BODY,
    body,
  };
}

export function changeTag(tag) {
  return {
    type: CHANGE_TAG,
    tag,
  };
}

export function addTag(tag) {
  return {
    type: ADD_TAG,
    tag,
  };
}

export function submitForm(article) {
  return {
    type: NEW_ARTICLE,
    article,
  };
}

export function resetArticle() {
  return {
    type: RESET_NEW_ARTICLE,
  };
}