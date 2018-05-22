/*
 *
 * SignUpContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { REGISTER_FAILURE } from './constants';

const initialState = fromJS({
  errors: {},
});

function signUpContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_FAILURE:
      return state.set('errors', action.payload.errors);
    default:
      return state;
  }
}

export default signUpContainerReducer;
