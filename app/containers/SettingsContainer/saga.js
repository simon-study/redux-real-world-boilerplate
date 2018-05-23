import { takeEvery, call, put } from 'redux-saga/effects';
import { updateProfile } from '../../utils/api';
import {
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from './constants';

// Individual exports for testing
export default function* defaultSaga() {
  yield [
    takeEvery(LOGOUT_REQUEST, logoutRequest),
    takeEvery(UPDATE_PROFILE, workerUpdateProfile),
  ];
}

function* logoutRequest() {
  window.localStorage.removeItem('token');
  yield put({ type: LOGOUT_SUCCESS });
}

function* workerUpdateProfile(action) {
  const token = window.localStorage.getItem('token');
  try {
    const response = yield call(updateProfile, action.user, token);
    if (response.status >= 200 && response.status < 300) {
      yield put({ type: LOGIN_SUCCESS, payload: response.data });
      yield put({ type: UPDATE_PROFILE_SUCCESS, payload: response.data });
    }
  } catch (error) {
    if (error.response) {
      yield put({ type: UPDATE_PROFILE_FAILURE, payload: error.response.data });
    }
  }
}
