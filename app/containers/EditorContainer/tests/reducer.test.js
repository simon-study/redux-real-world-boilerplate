
import { fromJS } from 'immutable';
import editorContainerReducer from '../reducer';

describe('editorContainerReducer', () => {
  it('returns the initial state', () => {
    expect(editorContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
