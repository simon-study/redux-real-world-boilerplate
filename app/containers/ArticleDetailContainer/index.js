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
import makeSelectArticleDetailContainer, { selectArticleDetails } from './selectors';
import reducer from './reducer';
import saga from './saga';
import ArticleDetail from '../../components/ArticleDetail';
import { resetArticle, fetchArticleDetail } from './actions';

export class ArticleDetailContainer extends React.Component {
  componentWillMount() {
    this.props.fetchArticleDetail(this.props.match.params.slug);
  }

  componentWillUnmount() {
    this.props.resetArticle()
  }

  render() {
    return (
      <ArticleDetail article={this.props.articleDetailContainer.article} />
    );
  }
};

ArticleDetailContainer.propTypes = {
  fetchArticleDetail: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  // article: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  articleDetailContainer: makeSelectArticleDetailContainer(),
  article: selectArticleDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchArticleDetail: (slug) => dispatch(fetchArticleDetail(slug)),
    resetArticle: () => dispatch(resetArticle()),
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
