
import { fromJS } from 'immutable';
import signInComponentReducer from '../reducer';

describe('signInComponentReducer', () => {
  it('returns the initial state', () => {
    expect(signInComponentReducer(undefined, {})).toEqual(fromJS({}));
  });
});
