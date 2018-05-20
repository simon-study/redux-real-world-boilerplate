import { createSelector } from 'reselect';

/**
 * Direct selector to the editorContainer state domain
 */
const selectEditorContainerDomain = (state) => state.get('editorContainer');

const makeSelectEditorContainer = () => createSelector(
  selectEditorContainerDomain,
  (substate) => substate.toJS()
);

const makeSelectTitle = () => createSelector(
  selectEditorContainerDomain,
  (substate) => substate.get('title')
);

const makeSelectDescription = () => createSelector(
  selectEditorContainerDomain,
  (substate) => substate.get('description')
);

const makeSelectBody = () => createSelector(
  selectEditorContainerDomain,
  (substate) => substate.get('body')
);

const makeSelectTag = () => createSelector(
  selectEditorContainerDomain,
  (substate) => substate.get('tag')
);

const makeSelectTagList = () => createSelector(
  makeSelectEditorContainer(),
  (substate) => substate.tagList
);

const makeSelectArticle = () => createSelector(
  makeSelectEditorContainer(),
  (substate) => substate.article
);

const makeSelectErrors = () => createSelector(
  makeSelectEditorContainer(),
  (substate) => substate.errors
);

export default makeSelectEditorContainer;
export {
  selectEditorContainerDomain,
  makeSelectTitle,
  makeSelectDescription,
  makeSelectBody,
  makeSelectTag,
  makeSelectTagList,
  makeSelectArticle,
  makeSelectErrors,
};
