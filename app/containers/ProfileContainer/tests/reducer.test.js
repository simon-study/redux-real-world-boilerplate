
import { fromJS } from 'immutable';
import profileContainerReducer from '../reducer';

describe('profileContainerReducer', () => {
  it('returns the initial state', () => {
    expect(profileContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
