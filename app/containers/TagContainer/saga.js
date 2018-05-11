import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

export default function* watcherfetchTags() {
  yield takeEvery('FETCH_TAGS', watcherFetchTags);
}

function* watcherFetchTags() {
  try {
    const response = yield axios({
      method: 'GET',
      url: 'https://conduit.productionready.io/api/tags',
    });
    yield put({ type: 'FETCH_TAGS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_TAGS_FAILURE', payload: error });
  }
}
