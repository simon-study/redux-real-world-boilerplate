import { takeEvery, call, put } from 'redux-saga/effects';
import { login } from '../../utils/api';
import { loginSuccess, loginFailure } from './actions';

// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery('LOGIN_REQUEST', workerSubmitLoginForm);
}

function* workerSubmitLoginForm(action) {
  try {
    const { email, password } = action.users;
    const response = yield call(login, email, password);

    window.localStorage.setItem('token', response.data.user.token);
    yield put(loginSuccess(response.data));
  } catch (error) {
    if (error.response) {
      yield put(loginFailure(error.response.data));
    }
  }
}
