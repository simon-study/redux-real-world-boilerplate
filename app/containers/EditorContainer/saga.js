import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery('NEW_ARTICLE', workerNewArticle);
}

function* workerNewArticle(action) {
  const token = window.localStorage.getItem('token');
  try {
    const response = yield axios({
      method: 'POST',
      url: 'https://conduit.productionready.io/api/articles',
      headers: { authorization: `Token ${token}` },
      data: {
        article: action.article,
      },
    });
    yield put({ type: 'NEW_ARTICLE_SUCCESS', payload: response.data });
  } catch (error) {
    if (error.response) {
      yield put({ type: 'NEW_ARTICLE_FAILURE', payload: error.response.data });
    }
  }
}
