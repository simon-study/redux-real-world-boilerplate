/**
 *
 * ArticleDetailContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectArticleDetailContainer, { selectArticleDetails, selectComments } from './selectors';
import reducer from './reducer';
import saga from './saga';
import ArticleDetail from '../../components/ArticleDetail';
import {
  resetArticle,
  fetchArticleDetail,
  fetchComments,
  resetComments,
} from './actions';

export class ArticleDetailContainer extends React.Component {
  componentWillMount() {
    this.props.fetchArticleDetail(this.props.match.params.slug);
    this.props.fetchComments(this.props.match.params.slug);
  }

  componentWillUnmount() {
    this.props.resetArticle();
    // this.props.resetComments();
  }

  render() {
    return (
      <ArticleDetail article={this.props.article} comments={this.props.comments} />
    );
  }
}

ArticleDetailContainer.propTypes = {
  fetchArticleDetail: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  fetchComments: PropTypes.func.isRequired,
  resetArticle: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  article: PropTypes.any.isRequired,
};

const mapStateToProps = createStructuredSelector({
  articleDetailContainer: makeSelectArticleDetailContainer(),
  article: selectArticleDetails(),
  comments: selectComments(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchArticleDetail: (slug) => dispatch(fetchArticleDetail(slug)),
    resetArticle: () => dispatch(resetArticle()),
    fetchComments: (slug) => dispatch(fetchComments(slug)),
    resetComments: () => dispatch(resetComments()),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'articleDetailContainer', reducer });
const withSaga = injectSaga({ key: 'articleDetailContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ArticleDetailContainer);
