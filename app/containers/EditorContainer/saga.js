import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import { newArticleAPi } from '../../utils/api';
import { newArticleFailure, newArticleSuccess } from './actions';

// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery('NEW_ARTICLE', workerNewArticle);
}

function* workerNewArticle(action) {
  const token = window.localStorage.getItem('token');
  try {
    const response = yield call(newArticleAPi, action.article, token);
    yield put(newArticleSuccess(response));
  } catch (error) {
    if (error.response) {
      yield put(newArticleFailure(error));
    }
  }
}
