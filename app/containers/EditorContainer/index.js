/**
 *
 * EditorContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEditorContainer, {
  makeSelectTitle,
  makeSelectDescription,
  makeSelectBody,
  makeSelectTag,
  makeSelectTagList,
  makeSelectArticle,
  makeSelectErrors,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import NewArticle from '../../components/NewArticle';

export class EditorContainer extends React.Component {
  render() {
    return (
      <NewArticle
        title={this.props.title}
        description={this.props.description}
        body={this.props.body}
        tag={this.props.tag}
        tagList={this.props.tagList}
        changeTitle={this.props.changeTitle}
        changeDescription={this.props.changeDescription}
        changeBody={this.props.changeBody}
        changeTag={this.props.changeTag}
        addTag={this.props.addTag}
        resetTag={this.props.resetTag}
        submitForm={this.props.submitForm}
        article={this.props.article}
        errors={this.props.errors}
        resetArticle={this.props.resetArticle}
      />
    );
  }
}

EditorContainer.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  tagList: PropTypes.array.isRequired,
  changeTitle: PropTypes.func.isRequired,
  changeDescription: PropTypes.func.isRequired,
  changeBody: PropTypes.func.isRequired,
  changeTag: PropTypes.func.isRequired,
  addTag: PropTypes.func.isRequired,
  resetTag: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  resetArticle: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  editorcontainer: makeSelectEditorContainer(),
  title: makeSelectTitle(),
  description: makeSelectDescription(),
  body: makeSelectBody(),
  tag: makeSelectTag(),
  tagList: makeSelectTagList(),
  article: makeSelectArticle(),
  errors: makeSelectErrors(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeTitle: (title) => dispatch({ type: 'CHANGE_TITLE', title }),
    changeDescription: (description) => dispatch({ type: 'CHANGE_DESC', description }),
    changeBody: (body) => dispatch({ type: 'CHANGE_BODY', body }),
    changeTag: (tag) => dispatch({ type: 'CHANGE_TAG', tag }),
    addTag: (tag) => dispatch({ type: 'ADD_TAG', tag }),
    resetTag: () => dispatch({ type: 'RESET_TAG' }),
    submitForm: (article) => dispatch({ type: 'NEW_ARTICLE', article}),
    resetArticle: () => dispatch({ type: 'RESET_NEW_ARTICLE' }),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'editorContainer', reducer });
const withSaga = injectSaga({ key: 'editorContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EditorContainer);
