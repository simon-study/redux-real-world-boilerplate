/*
 *
 * SignUpContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { REGISTER_FAILURE } from './constants';

const initialState = fromJS({
  error: {},
});

function signUpContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_FAILURE:
      return state.set('error', action.payload.response.data.errors)
    default:
      return state;
  }
}

export default signUpContainerReducer;
