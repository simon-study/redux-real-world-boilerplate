
import { fromJS } from 'immutable';
import articlesTagsContainerReducer from '../reducer';

describe('articlesTagsContainerReducer', () => {
  it('returns the initial state', () => {
    expect(articlesTagsContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
