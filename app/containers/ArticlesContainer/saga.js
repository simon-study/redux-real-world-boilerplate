import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import { getArticles, getTags, getArticlesWithTag } from '../../utils/api';

const DEFAULT_LIMIT = 10;

export default function* watcherFetchArticles() {
  yield takeEvery('FETCH_DATA', fetchArticles);
  yield takeEvery('FETCH_TAGS', fetchTags);
  yield takeEvery('FETCH_ARTICLES_OFFSET', workerFetchArticlesWithOffset);
  yield takeEvery('FETCH_ARTICLES_TAGS', fetchArticlesTags);
}

function* fetchArticles() {
  try {
    const response = yield call(getArticles);
    yield put({
      type: 'FETCH_DATA_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: 'FETCH_DATA_FAILURE', payload: error });
  }
}

function* fetchTags() {
  try {
    const response = yield call(getTags);
    yield put({ type: 'FETCH_TAGS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_TAGS_FAILURE', payload: error });
  }
}

function* workerFetchArticlesWithOffset(action) {
  try {
    const response = yield axios({
      method: 'GET',
      url: `https://conduit.productionready.io/api/articles?limit=${DEFAULT_LIMIT}&offset=${action.page * DEFAULT_LIMIT}`,
    });
    yield put({
      type: 'FETCH_ARTICLES_OFFSET_SUCCESS',
      payload: {
        data: response.data,
        page: action.page,
      },
    });
  } catch (error) {
    yield put({ type: 'FETCH_ARTICLES_OFFSET_FAILURE', payload: error });
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
