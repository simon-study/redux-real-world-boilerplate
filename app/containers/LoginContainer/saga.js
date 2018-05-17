import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery('LOGIN_REQUEST', workerSubmitLoginForm);
}

function* workerSubmitLoginForm(action) {
  console.log(action)
  try {
    const response = yield axios({
      method: 'POST',
      url: 'https://conduit.productionready.io/api/users/login',
      data: {
        user: {
          email: action.users.email,
          password: action.users.password,
        },
      },
    });
    window.localStorage.setItem('token', response.data.user.token);
    yield put({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'LOGIN_FAILURE', payload: error });
  }
}
