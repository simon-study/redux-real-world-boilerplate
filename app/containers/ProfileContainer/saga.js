import { takeEvery, call, put } from 'redux-saga/effects';
import {
  getProfileSuccess,
  getProfileFailure,
  getArticlesByAuthorSuccess,
  getArticlesByAuthorFailure,
} from './actions';
import { getProfile, getArticlesByAuthor } from '../../utils/api';

// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery('GET_PROFILE_BY_AUTHOR', workerGetProfile);
  yield takeEvery('GET_ARTICLES_BY_AUTHOR', workerGetArticlesByAuthor);
}

function* workerGetProfile(action) {
  try {
    const response = yield call(getProfile, action.username, action.token);
    yield put(getProfileSuccess(response.data));
  } catch (error) {
    if (error.response) {
      yield put(getProfileFailure(error.response.data));
    }
  }
}

function* workerGetArticlesByAuthor(action) {
  try {
    const response = yield call(getArticlesByAuthor, action.username);
    yield put(getArticlesByAuthorSuccess(response.data));
  } catch (error) {
    if (error.response) {
      yield put(getArticlesByAuthorFailure(error.response.data));
    }
  }
}