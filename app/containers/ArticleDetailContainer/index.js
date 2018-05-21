/**
 *
 * ArticleDetailContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectArticleDetailContainer, {
  selectArticleDetails,
  selectComments,
  selectCurrentUser,
  selectRedirect,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import ArticleDetail from '../../components/ArticleDetail';
import {
  resetArticle,
  fetchArticleDetail,
  fetchComments,
  resetComments,
  deleteArticle
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
    // if (this.props.redirectTo && this.props.redirectTo.length) {
    //   <Redirect to="/" />
    // }
    const { article, comments, currentUser } = this.props;
    return (
      this.props.redirectTo.length ?  <Redirect to="/" /> :
      <ArticleDetail
        article={article}
        comments={comments}
        currentUser={currentUser}
        deleteArticle={this.props.deleteArticle}
      />
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
  currentUser: selectCurrentUser(),
  redirectTo: selectRedirect(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchArticleDetail: (slug) => dispatch(fetchArticleDetail(slug)),
    resetArticle: () => dispatch(resetArticle()),
    fetchComments: (slug) => dispatch(fetchComments(slug)),
    resetComments: () => dispatch(resetComments()),
    deleteArticle: (slug) => dispatch(deleteArticle(slug)),
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
