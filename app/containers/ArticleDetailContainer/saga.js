import { takeEvery, put, call } from 'redux-saga/effects';
import { getArticle, getComments } from '../../utils/api';
import {
  FETCH_ARTICLE_DETAIL_SUCCESS, FETCH_ARTICLE_DETAIL_FAILURE,
  FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE,
} from './constants';

// Individual exports for testing
export default function* defaultSaga() {
  yield [
    takeEvery('FETCH_ARTICLE_DETAIL', fetchArticleDetail),
    takeEvery('FETCH_COMMENTS', fetchComments),
  ];
}

function* fetchArticleDetail(action) {
  try {
    const response = yield call(getArticle, action.slug);
    yield put({
      type: FETCH_ARTICLE_DETAIL_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: FETCH_ARTICLE_DETAIL_FAILURE,
      payload: error,
    });
  }
}

function* fetchComments(action) {
  try {
    const response = yield call(getComments, action.slug);
    yield put({
      type: FETCH_COMMENTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: FETCH_COMMENTS_FAILURE,
      payload: error,
    });
  }
}
