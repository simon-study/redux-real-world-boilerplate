import { takeEvery, call, put } from 'redux-saga/effects';
import { updateProfile } from '../../utils/api';
import {
  LOGOUT_REQUEST,
  UPDATE_PROFILE,
} from './constants';
import {
  logoutSuccess,
  updateCurrentUser,
  updateProfileSuccess,
  updateProfileFailure,
} from './actions';

// Individual exports for testing
export default function* defaultSaga() {
  yield [
    takeEvery(LOGOUT_REQUEST, logoutRequest),
    takeEvery(UPDATE_PROFILE, workerUpdateProfile),
  ];
}

function* logoutRequest() {
  window.localStorage.removeItem('token');
  yield put(logoutSuccess());
}

function* workerUpdateProfile(action) {
  const token = window.localStorage.getItem('token');
  try {
    const response = yield call(updateProfile, action.user, token);
    if (response.status >= 200 && response.status < 300) {
      yield put(updateCurrentUser(response));
      yield put(updateProfileSuccess(response));
    }
  } catch (error) {
    if (error.response) {
      yield put(updateProfileFailure(error));
    }
  }
}
