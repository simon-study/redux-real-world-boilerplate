/**
 *
 * Test
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import getArticles from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import ArticleList from '../../components/ArticleList';
import Pagination from '../../components/Pagination';

export class ArticlesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    console.log(this.props.articles);
    return (
      <div>
        <ArticleList articles={this.props.articles.articles} />
        <Pagination articlesCount={this.props.articles.articlesCount} currentPage={this.props.articles.currentPage} setPage={(page) => this.props.setPage(page)}/>
      </div>
    );
  }
}

ArticlesContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  articles: getArticles()  
});

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch({type: 'FETCH_DATA'}),
    setPage: (page) => dispatch({type: 'FETCH_ARTICLES_OFFSET', page}),
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'articles', reducer });
const withSaga = injectSaga({ key: 'watcherFetchArticles', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ArticlesContainer);
