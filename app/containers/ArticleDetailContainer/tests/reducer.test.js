
import { fromJS } from 'immutable';
import articleDetailContainerReducer from '../reducer';

describe('articleDetailContainerReducer', () => {
  it('returns the initial state', () => {
    expect(articleDetailContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
