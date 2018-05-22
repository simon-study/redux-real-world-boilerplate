import axios from 'axios';
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
  yield takeEvery('FAVORITE_ARTICLE', favoriteArticle);
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

function* favoriteArticle(action) {
  const method = action.favorited ? 'DELETE' : 'POST';
  console.log(action.favorited);
  const token = window.localStorage.getItem('token');
  try {
    const response = yield axios({
      method,
      url: `https://conduit.productionready.io/api/articles/${action.slug}/favorite`,
      headers: { Authorization: `Token ${token}` },
    });
    yield put({ type: 'FAVORITE_IN_PROFILE_SUCCESS', payload: response.data });
  } catch (error) {
    if (error.response) {
      yield put({ type: 'FAVORITE_IN_PROFILE_SUCCESS', payload: error.response.data });
    }
  }
}