import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

const DEFAULT_LIMIT = 10;

export default function* watcherFetchArticles() {
  yield takeEvery('FETCH_DATA', fetchArticles);
  yield takeEvery('FETCH_ARTICLES_OFFSET', workerFetchArticlesWithOffset);
}

function* fetchArticles() {
  try {
    const response = yield axios({
      method: 'GET',
      url: `https://conduit.productionready.io/api/articles?limit=${DEFAULT_LIMIT}`,
    });
    yield put({
      type: 'FETCH_DATA_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: 'FETCH_DATA_FAILURE', payload: error });
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
