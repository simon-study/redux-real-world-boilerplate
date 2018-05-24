import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  FETCH_DATA,
  FETCH_TAGS,
  FETCH_ARTICLES_OFFSET,
  FETCH_ARTICLES_TAGS,
  FAVORITE_ARTICLE,
  GET_FEED_ARTICLES,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAILURE,
  FETCH_ARTICLES_OFFSET_SUCCESS,
  FETCH_ARTICLES_OFFSET_FAILURE,
  FETCH_ARTICLES_TAG_SUCCESS,
  FETCH_ARTICLES_TAG_FAILURE,
} from './constants';
import {
  getTags,
  getArticlesWithTag,
  getArticlesWithOffset,
  getArticlesAPI,
  toggleFavoriteAPI,
  getListFeed,
} from '../../utils/api';
import {
  redirectToSignUp,
} from './actions';
import { push } from 'react-router-redux';

export default function* watcherFetchArticles() {
  yield [
    takeEvery(FETCH_DATA, fetchArticles),
    takeEvery(FETCH_TAGS, fetchTags),
    takeEvery(FETCH_ARTICLES_OFFSET, workerFetchArticlesWithOffset),
    takeEvery(FETCH_ARTICLES_TAGS, fetchArticlesTags),
    takeEvery(FAVORITE_ARTICLE, favoriteArticle),
    takeEvery('TOGGLE_LIST_ARTICLES', workerToggleListArticle),
  ];
}

function* fetchArticles() {
  const token = window.localStorage.getItem('token');
  try {
    let response;
    if (token) {
      response = yield call(getListFeed, token);
    } else {
      response = yield call(getArticlesAPI, token);
    }
    yield put({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    if (error.response) {
      yield put({ type: FETCH_DATA_FAILURE, payload: error.response.data });
    }
  }
}

function* fetchTags() {
  try {
    const response = yield call(getTags);
    yield put({ type: FETCH_TAGS_SUCCESS, payload: response.data });
  } catch (error) {
    if (error.response) {
      yield put({ type: FETCH_TAGS_FAILURE, payload: error.response.data });
    }
  }
}

function* workerFetchArticlesWithOffset(action) {
  try {
    const response = yield call(getArticlesWithOffset, action.page);
    yield put({
      type: FETCH_ARTICLES_OFFSET_SUCCESS,
      payload: {
        data: response.data,
        page: action.page,
      },
    });
  } catch (error) {
    if (error.response) {
      yield put({ type: FETCH_ARTICLES_OFFSET_FAILURE, payload: error.response.data });
    }
  }
}

function* fetchArticlesTags(action) {
  try {
    const response = yield call(getArticlesWithTag, action.tag);
    yield put({
      type: FETCH_ARTICLES_TAG_SUCCESS,
      payload: {
        data: response.data,
        tagName: action.tag,
      },
    });
  } catch (error) {
    if (error.response) {
      yield put({ type: FETCH_ARTICLES_TAG_FAILURE, payload: error.response.data });
    }
  }
}

function* favoriteArticle(action) {
  const method = action.favorited ? 'DELETE' : 'POST';
  const token = window.localStorage.getItem('token');
  try {
    if (token) {
      const response = yield call(toggleFavoriteAPI, action.slug, method, token);
      yield put({ type: 'FAVORITE_SUCCESS', payload: response.data });
    } else {
      yield put(push("/signup"));
    }
  } catch (error) {
    if (error.response) {
      yield put({ type: 'FAVORITE_ERROR', payload: error.response.data });
    }
  }
}

function* workerToggleListArticle(action) {
  const token = window.localStorage.getItem('token');
  try {
    let response;
    if (action.tab === 'feed') {
      response = yield call(getListFeed, token);
    } else {
      response = yield call(getArticlesAPI, token);
    }
    yield put({ type: 'GET_LIST_ARTICLE_SUCCESS', payload: response.data });
  } catch (error) {
    if (error.response) {
      yield put({ type: 'GET_LIST_ARTICLE_FAILURE', payload: error.response.data })
    }
  }
}
