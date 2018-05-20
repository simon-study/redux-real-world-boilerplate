import { takeEvery, call, put } from 'redux-saga/effects';
import { register } from '../../utils/api';

// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery('REGISTER_REQUEST', registerRequest);
}

function* registerRequest(action) {
  try {
    const response = yield call(register, action.name, action.email, action.password);
    if (response.status >= 200 && response.status < 300) {
      window.localStorage.setItem('token', response.data.user.token);
      yield put({ type: 'LOGIN_SUCCESS', payload: response.data });
    }
  } catch (error) {
    if (error.response) {
      yield put({ type: 'REGISTER_FAILURE', payload: error.response.data });
    }
  }
}
