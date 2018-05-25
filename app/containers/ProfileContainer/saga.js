import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {
  getProfileSuccess,
  getProfileFailure,
  getArticlesByAuthorSuccess,
  getArticlesByAuthorFailure,
  toggleFollowSuccess,
  toggleFollowFailure,
  toggleFavoriteSuccess,
  toggleFavoriteFailure,
  toggleArticleByAuthorSuccess,
  toggleArticleByAuthorFailure,
} from './actions';
import {
  GET_PROFILE_BY_AUTHOR,
  GET_ARTICLES_BY_AUTHOR,
  FAVORITE_ARTICLE,
  TOGGLE_FOLLOW,
  TOGGLE_ARTICLES_BY_AUTHOR,
} from './constants';
import {
  getProfileAPI,
  getArticlesByAuthorAPI,
  toggleFollowAPI,
  toggleFavoriteAPI,
  toggleFetchArticleByAuthorAPI,
} from '../../utils/api';

export default function* defaultSaga() {
  yield [
    takeEvery(GET_PROFILE_BY_AUTHOR, workerGetProfile),
    takeEvery(GET_ARTICLES_BY_AUTHOR, workerGetArticlesByAuthor),
    takeEvery(FAVORITE_ARTICLE, favoriteArticle),
    takeEvery(TOGGLE_FOLLOW, toggleFollow),
    takeEvery(TOGGLE_ARTICLES_BY_AUTHOR, toggleFetchArticlesByAuthor),
  ];
}

function* workerGetProfile(action) {
  try {
    const response = yield call(getProfileAPI, action.username, action.token);
    yield put(getProfileSuccess(response.data));
  } catch (error) {
    if (error.response) {
      yield put(getProfileFailure(error.response.data));
    }
  }
}

function* workerGetArticlesByAuthor(action) {
  try {
    const response = yield call(getArticlesByAuthorAPI, action.username);
    yield put(getArticlesByAuthorSuccess(response.data));
  } catch (error) {
    if (error.response) {
      yield put(getArticlesByAuthorFailure(error.response.data));
    }
  }
}

function* toggleFetchArticlesByAuthor(action) {
  const token = window.localStorage.getItem('token');
  try {
    const response = yield call(toggleFetchArticleByAuthorAPI, action.tab, action.username, token);
    yield put(toggleArticleByAuthorSuccess(response));
  } catch (error) {
    if (error.response) {
      yield put(toggleArticleByAuthorFailure(error));
    }
  }
}

function* favoriteArticle(action) {
  const method = action.favorited ? 'DELETE' : 'POST';
  const token = window.localStorage.getItem('token');
  try {
    if (token) {
      const response = yield call(toggleFavoriteAPI, action.slug, method, token);
      yield put(toggleFavoriteSuccess(response));
    } else {
      yield put(push('/signup'));
    }
  } catch (error) {
    if (error.response) {
      yield put(toggleFavoriteFailure(error));
    }
  }
}

function* toggleFollow(action) {
  const method = action.following ? 'DELETE' : 'POST';
  const token = window.localStorage.getItem('token');
  try {
    if (token) {
      const response = yield call(toggleFollowAPI, method, action.username, token);
      yield put(toggleFollowSuccess(response));
    } else {
      yield put(push('/signup'));
    }
  } catch (error) {
    if (error.response) {
      yield put(toggleFollowFailure(error));
    }
  }
}
