import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import {
  getProfileSuccess,
  getProfileFailure,
  getArticlesByAuthorSuccess,
  getArticlesByAuthorFailure,
} from './actions';
import {
  GET_PROFILE_BY_AUTHOR,
  GET_ARTICLES_BY_AUTHOR,
  FAVORITE_ARTICLE,
  TOGGLE_FOLLOW,
} from './constants';
import {
  getProfile,
  getArticlesByAuthor
} from '../../utils/api';

const token = window.localStorage.getItem('token');

export default function* defaultSaga() {
  yield [
    takeEvery(GET_PROFILE_BY_AUTHOR, workerGetProfile),
    takeEvery(GET_ARTICLES_BY_AUTHOR, workerGetArticlesByAuthor),
    takeEvery(FAVORITE_ARTICLE, favoriteArticle),
    takeEvery(TOGGLE_FOLLOW, toggleFollow),
  ];
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
  // const token = window.localStorage.getItem('token');
  try {
    const response = yield axios({
      method: 'GET',
      url: `https://conduit.productionready.io/api/articles/?author=${action.username}&limit=5`,
      headers: {
        Authorization: token ? `Token ${token}` : ''
      }
    })
    yield put(getArticlesByAuthorSuccess(response.data));
  } catch (error) {
    if (error.response) {
      yield put(getArticlesByAuthorFailure(error.response.data));
    }
  }
}

function* favoriteArticle(action) {
  const method = action.favorited ? 'DELETE' : 'POST';
  // const token = window.localStorage.getItem('token');
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

function* toggleFollow(action) {
  console.log(action.username);
  const method = action.following ? 'DELETE' : 'POST';
  try {
    if (token) {
      const response = yield axios({
        method: method,
        url: `https://conduit.productionready.io/api/profiles/${action.username}/follow`,
        headers: { Authorization: `Token ${token}` },
      })

      yield put({ type: 'TOGGLE_FOLLOW_SUCCESS', payload: response.data });
    } else {
      yield put({ type: 'REDIRECT_PAGE' })
    }
  } catch (error) {
    if (error.response) {
      yield put({ type: 'TOGGLE_FOLLOWING_FAILURE', payload: error.response.data })
    }
  }
}