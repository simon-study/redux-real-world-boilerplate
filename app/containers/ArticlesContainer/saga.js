import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  GET_FEED_ARTICLES_SUCCESS,
  GET_FEED_ARTICLES_FAILURE,
} from './constants';
import {
  getArticles,
  getTags,
  getArticlesWithTag,
  getArticlesWithOffset
} from '../../utils/api';

export default function* watcherFetchArticles() {
  yield [
    takeEvery('FETCH_DATA', fetchArticles),
    takeEvery('FETCH_TAGS', fetchTags),
    takeEvery('FETCH_ARTICLES_OFFSET', workerFetchArticlesWithOffset),
    takeEvery('FETCH_ARTICLES_TAGS', fetchArticlesTags),
    takeEvery('FAVORITE_ARTICLE', favoriteArticle),
    takeEvery('GET_FEED_ARTICLES', getFeedArticles),
  ];
}

function* fetchArticles() {
  const token = window.localStorage.getItem('token');
  try {
    // const response = yield call(getArticles);    
    const response = yield axios({
      method: 'GET',
      url: 'https://conduit.productionready.io/api/articles/?limit=10',
      headers: { Authorization: `Token ${token}` },
    })
    yield put({
      type: 'FETCH_DATA_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: 'FETCH_DATA_FAILURE',
      payload: error
    });
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
    const response = yield call(getArticlesWithOffset, action.page);
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
    yield put({
      type: 'FETCH_ARTICLES_TAG_SUCCESS',
      payload: {
        data: response.data,
        tagName: action.tag,
      },
    });
  } catch (error) {
    yield put({ type: 'FETCH_ARTICLES_TAG_FAILURE', payload: error });
  }
}

function* favoriteArticle(action) {
  const method = action.favorited ? 'DELETE' : 'POST';
  const token = window.localStorage.getItem('token');
  try {
    const response = yield axios({
      method,
      url: `https://conduit.productionready.io/api/articles/${action.slug}/favorite`,
      headers: { Authorization: `Token ${token}` },
    });
    yield put({ type: 'FAVORITE_SUCCESS', payload: response.data })
  } catch (error) {
    
  }
}

function* getFeedArticles() {
  const token = window.localStorage.getItem('token');
  try {
    const response = yield axios({
      method: 'GET',
      url: `https://conduit.productionready.io/api/articles/feed`,
      headers: { Authorization: `Token ${token}` },
    });
    console.log(response)
    yield put({ type: 'FETCH_DATA_SUCCESS', payload: response.data })
  } catch (error) {
    if (error.response) {
      yield put({ type: 'FETCH_DATA_FAILURE', payload: error.response.data });
    }
  }
}
