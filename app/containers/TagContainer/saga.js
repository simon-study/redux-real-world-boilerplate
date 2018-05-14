import { takeEvery, call, put } from 'redux-saga/effects';
import { getTags } from '../../utils/api';

export default function* watcherfetchTags() {
  yield takeEvery('FETCH_TAGS', watcherFetchTags);
}

function* watcherFetchTags() {
  try {
    const response = yield call(getTags);
    yield put({ type: 'FETCH_TAGS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_TAGS_FAILURE', payload: error });
  }
}
