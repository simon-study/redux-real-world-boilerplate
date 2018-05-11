/**
 *
 * Test
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectArticlesContainer, {
  selectArticles,
  selectArticlesCount,
  selectCurrentPage,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import ArticleList from '../../components/ArticleList';
import Pagination from '../../components/Pagination';

export class ArticlesContainer extends React.Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <ArticleList articles={this.props.articles} />
        <Pagination
          articlesCount={this.props.articlesCount}
          currentPage={this.props.currentPage}
          setPage={(page) => this.props.setPage(page)}
        />
      </div>
    );
  }
}

ArticlesContainer.propTypes = {
  fetchData: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  articles: PropTypes.any.isRequired,
  currentPage: PropTypes.number.isRequired,
  articlesCount: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  articlesContainer: makeSelectArticlesContainer(),
  articles: selectArticles(),
  articlesCount: selectArticlesCount(),
  currentPage: selectCurrentPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch({ type: 'FETCH_DATA' }),
    setPage: (page) => dispatch({ type: 'FETCH_ARTICLES_OFFSET', page }),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'articlesContainer', reducer });
const withSaga = injectSaga({ key: 'watcherFetchArticles', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ArticlesContainer);
