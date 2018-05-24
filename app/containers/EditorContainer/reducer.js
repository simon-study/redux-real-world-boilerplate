/*
 *
 * EditorContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_TITLE,
  CHANGE_DESC,
  CHANGE_BODY,
  CHANGE_TAG,
  ADD_TAG,
  RESET_TAG,
  NEW_ARTICLE_SUCCESS,
  NEW_ARTICLE_FAILURE,
  RESET_NEW_ARTICLE,
} from './constants';
import { FETCH_ARTICLES_TAG_FAILURE } from '../ArticlesContainer/constants';

const initialState = fromJS({
  title: '',
  description: '',
  body: '',
  tag: '',
  tagList: [],
  article: {},
  errors: {},
  flag: false,
});

function editorContainerReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TITLE:
      return state.set('title', action.title);
    case CHANGE_DESC:
      return state.set('description', action.description);
    case CHANGE_BODY:
      return state.set('body', action.body);
    case CHANGE_TAG:
      return state.set('tag', action.tag);
    case ADD_TAG:
      return state.update('tagList', tagList => tagList.push(action.tag));
    // case RESET_TAG:
    //   return state.set('tag', '');
    case NEW_ARTICLE_SUCCESS:
      return state.set('article', action.payload.article)
                  .set('flag', true);
    case NEW_ARTICLE_FAILURE:
      return state.set('errors', action.payload.errors);
    case RESET_NEW_ARTICLE:
      return state.set('article', {})
                  .set('title', '')
                  .set('description', '')
                  .set('body', '')
                  .set('tagList', []);
    default:
      return state;
  }
}

export default editorContainerReducer;
