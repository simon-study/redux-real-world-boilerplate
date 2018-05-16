import { takeEvery, put } from 'redux-saga/effects';

// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery('LOGOUT_REQUEST', logoutRequest);
}

function* logoutRequest() {
  window.localStorage.removeItem('token');
  yield put({ type: 'LOGOUT_SUCCESS' });
}
