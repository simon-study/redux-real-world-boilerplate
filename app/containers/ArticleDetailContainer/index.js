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
import makeSelectArticleDetailContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import ArticleDetail from '../../components/ArticleDetail';

export class ArticleDetailContainer extends React.Component {
  componentWillMount() {
    this.props.fetchArticleDetail(this.props.match.params.slug);
  }
  render() {
    const { article } = this.props.article;
    return (
      <ArticleDetail article={article}/>
    );
  }
};

ArticleDetailContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  article: makeSelectArticleDetailContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchArticleDetail: (slug) => dispatch({ type: 'FETCH_ARTICLE_DETAIL', slug }),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'article', reducer });
const withSaga = injectSaga({ key: 'articleDetailContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ArticleDetailContainer);
