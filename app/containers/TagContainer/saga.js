import { takeEvery, call, put } from 'redux-saga/effects';
import {
  getTags,
  getArticlesWithTag,
} from '../../utils/api';

export default function* root() {
  yield [
    takeEvery('FETCH_TAGS', fetchTags),
    takeEvery('FETCH_ARTICLES_TAGS', fetchArticlesTags),
  ]
}

function* fetchTags() {
  try {
    const response = yield call(getTags);
    yield put({ type: 'FETCH_TAGS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_TAGS_FAILURE', payload: error });
  }
}

function* fetchArticlesTags(action) {
  try {
    const response = yield call(getArticlesWithTag, action.tag);
    console.log(response);
    yield put({ type: 'FETCH_ARTICLES_TAG_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_ARTICLES_TAG_FAILURE', payload: error });
  }
}
