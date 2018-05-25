import { takeEvery, call, put } from 'redux-saga/effects';
import { registerAPI } from '../../utils/api';
import { REGISTER_REQUEST } from './constants';
import {
  registerSuccess,
  registerFailure,
} from './actions';

// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery(REGISTER_REQUEST, registerRequest);
}

function* registerRequest(action) {
  try {
    const response = yield call(registerAPI, action.name, action.email, action.password);
    if (response.status >= 200 && response.status < 300) {
      window.localStorage.setItem('token', response.data.user.token);
      yield put(registerSuccess(response));
    }
  } catch (error) {
    if (error.response) {
      yield put(registerFailure(error));
    }
  }
}
