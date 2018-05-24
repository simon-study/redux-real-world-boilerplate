import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  getComments,
  followRequest,
  postComment,
  deleteCommentAPI,
  toggleFavoriteAPI,
  deleteArticleAPI,
  getArticleDetailAPI,
} from '../../utils/api';

import {
  submitCommentSuccess,
  submitCommentError,
  deleteCommentSuccess,
  deleteCommentError,
} from './actions';

import {
  FETCH_ARTICLE_DETAIL_SUCCESS, FETCH_ARTICLE_DETAIL_FAILURE,
  FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE,
} from './constants';

// Individual exports for testing
export default function* defaultSaga() {
  yield [
    takeEvery('FETCH_ARTICLE_DETAIL', fetchArticleDetail),
    takeEvery('FETCH_COMMENTS', fetchComments),
    takeEvery('DELETE_ARTICLE', deleteArticle),
    takeEvery('TOGGLE_FAVORITE', toggleFavorite),
    takeEvery('TOGGLE_FOLLOW', toggleFollow),
    takeEvery('SUBMIT_COMMENT', submitComment),
    takeEvery('DELETE_COMMENT', deleteComment),
  ];
}

function* fetchArticleDetail(action) {
  const token = window.localStorage.getItem('token');
  try {
    const response = yield call(getArticleDetailAPI, action.slug, token)
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

function* deleteArticle(action) {
  const token = window.localStorage.getItem('token');
  try {
    const response = yield call(deleteArticleAPI, action.slug, token);
    if (response.status >= 200 && response.status < 300) {
      yield put({ type: 'DELETE_ARTICLE_SUCCESS' });
    }
  } catch (error) {
    if (error.response) {
      yield put({ type: 'DELETE_ARTICLE_FAILURE', payload: error.response.data });
    }
  }
}

function* toggleFavorite(action) {
  const token = window.localStorage.getItem('token');
  const method = action.favorited ? 'DELETE' : 'POST';

  try {
    if (token) {
      const response = yield call(toggleFavoriteAPI, action.slug, method, token);
      yield put({ type: 'FAVORITE_ON_ARTICLE_DETAIL_SUCCESS', payload: response.data });
    } else {
      yield put({ type: 'REDIRECT_PAGE' });
    }
  } catch (error) {
    if (response.error) {
      yield put({ type: 'FAVORITE_ERROR', payload: error.response.data })
    }
  }
}

function* toggleFollow(action) {
  const token = window.localStorage.getItem('token');
  const method = action.follow ? 'DELETE' : 'POST';

  try {
    if (token) {
      const response = yield call(followRequest, method, action.username, token);
      yield put({ type: 'TOGGLE_FOLLOW_SUCCESS', payload: response.data });
    } else {
      yield put({ type: 'REDIRECT_PAGE' });
    }
  } catch (error) {
    if (error.response) {
      yield put({ type: 'TOGGLE_FOLLOW_ERROR', payload: error.response.data });
    }
  }
}

function* submitComment(action) {
  const token = window.localStorage.getItem('token');
  try {
    const response = yield call(postComment, action.slug, action.body, token);
    yield put(submitCommentSuccess(response));
  } catch (error) {
    if (error.response) {
      yield put(submitCommentError(error));
    }
  }
}

function* deleteComment(action) {
  const token = window.localStorage.getItem('token');
  try {
    const response = yield call(deleteCommentAPI, action.slug, action.id, token);
    yield put(deleteCommentSuccess(action.id));
  } catch (error) {
    yield put(deleteCommentError(error));
  }
}






