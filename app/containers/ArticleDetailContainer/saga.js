import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery('FETCH_ARTICLE_DETAIL', fetchArticleDetail);
}

function* fetchArticleDetail(action) {
  try {
    const response = yield axios({
      method: 'GET',
      url: `https://conduit.productionready.io/api/articles/${action.slug}`,
    });
    yield put({
      type: 'FETCH_ARTICLE_DETAIL_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: 'FETCH_ARTICLE_DETAIL_FAILURE',
      payload: error,
    });
  }
}
