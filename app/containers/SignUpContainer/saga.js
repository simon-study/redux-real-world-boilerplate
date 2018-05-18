import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery('REGISTER_REQUEST', registerRequest)
}

function* registerRequest(action) {
  try {
    const response = yield axios({
      method: 'POST',
      url: 'https://conduit.productionready.io/api/users',
      data: {
        'user': {
          username: action.name,
          email: action.email,
          password: action.password
        }
      }
    });
    if (response.status >= 200 && response.status < 300) {
      window.localStorage.setItem('token', response.data.user.token);
      yield put({ type: 'LOGIN_SUCCESS', payload: response.data });
    }
  } catch (error) {
    console.log(error)
    yield put({ type: 'REGISTER_FAILURE', payload: error });
  }
}
