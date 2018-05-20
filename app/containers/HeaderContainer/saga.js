import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { GET_CURRENT_USER_FAILURE } from './constants';

// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery('GET_CURRENT_USER', getCurrentUser);
}

function* getCurrentUser(action) {
  try {
    const response = yield axios({
      method: 'GET',
      url: 'https://conduit.productionready.io/api/user',
      headers: { authorization: `Token ${action.token}` },
    });

    yield put({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: GET_CURRENT_USER_FAILURE, payload: error });
  }
}

