
import { fromJS } from 'immutable';
import tagContainerReducer from '../reducer';

describe('tagContainerReducer', () => {
  it('returns the initial state', () => {
    expect(tagContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
