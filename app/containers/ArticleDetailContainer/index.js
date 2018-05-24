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
  selectLoggedIn,
  selectLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import ArticleDetail from '../../components/ArticleDetail';
import {
  resetArticle,
  fetchArticleDetail,
  fetchComments,
  resetComments,
  deleteArticle,
} from './actions';

export class ArticleDetailContainer extends React.Component {
  componentWillMount() {
    this.props.fetchArticleDetail(this.props.match.params.slug);
    this.props.fetchComments(this.props.match.params.slug);
  }

  componentWillUnmount() {
    this.props.resetArticle();
    this.props.resetComments();
  }

  isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  render() {
    const { article, currentUser, comments } = this.props
    const checkEmptyArticle = this.isEmpty(article);
    const checkEmptyCurrentUser = this.isEmpty(currentUser);
    const isModify = !checkEmptyArticle && !checkEmptyCurrentUser && currentUser.username === article.author.username;

    return (
      this.props.redirectTo.length ? 
      <Redirect to={this.props.redirectTo} /> :
      // <ArticleDetail
      //   article={article}
      //   comments={comments}
      //   currentUser={currentUser}
      //   deleteArticle={this.props.deleteArticle}
      //   isModify={isModify}
      //   toggleFavorite={this.props.toggleFavorite}
      //   toggleFollow={this.props.toggleFollow}
      //   loggedIn={this.props.loggedIn}
      //   submitComment={this.props.submitComment}
      //   slug={this.props.match.params.slug}
      //   onDeleteComment={this.props.onDeleteComment}
      // />
      (!this.props.isLoading ? <ArticleDetail {...this.props} slug={this.props.match.params.slug} /> : <div>Loading</div>)
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
  currentUser: PropTypes.object.isRequired,
  redirectTo: PropTypes.string.isRequired,
  deleteArticle: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  articleDetailContainer: makeSelectArticleDetailContainer(),
  article: selectArticleDetails(),
  comments: selectComments(),
  currentUser: selectCurrentUser(),
  redirectTo: selectRedirect(),
  loggedIn: selectLoggedIn(),
  isLoading: selectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchArticleDetail: (slug) => dispatch(fetchArticleDetail(slug)),
    resetArticle: () => dispatch(resetArticle()),
    fetchComments: (slug) => dispatch(fetchComments(slug)),
    resetComments: () => dispatch(resetComments()),
    deleteArticle: (slug) => dispatch(deleteArticle(slug)),
    toggleFavorite: (slug, favorited) => dispatch({ type: 'TOGGLE_FAVORITE', slug, favorited }),
    toggleFollow: (username, follow) => dispatch({ type: 'TOGGLE_FOLLOW', username, follow }),
    submitComment: (slug, body) => dispatch({ type: 'SUBMIT_COMMENT', slug, body }),
    onDeleteComment: (slug, id) => dispatch({ type: 'DELETE_COMMENT', slug, id }),
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
