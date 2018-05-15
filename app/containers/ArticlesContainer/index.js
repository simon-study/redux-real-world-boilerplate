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
  selectArticles, selectArticlesCount,
  selectCurrentPage, selectTags,
  // selectArticlesTag,
  selectTagName,
} from './selectors';
import {
  fetchTags, fetchData,
  setPage, fetchListArticlesTag, resetTagName,
} from './actions';
import reducer from './reducer';
import saga from './saga';
import ArticleList from '../../components/ArticleList';
import Pagination from '../../components/Pagination';
import PopularTags from '../../components/PopularTags';

export class ArticlesContainer extends React.Component {
  componentWillMount() {
    this.props.fetchData();
    this.props.fetchTags();
  }

  onClickTab = (e) => {
    e.preventDefault();
    this.props.fetchData();
    this.props.resetTagName();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-9">
          <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
              <li className="nav-item">
                <a className={this.props.tagName ? 'nav-link' : 'nav-link active'} href="" onClick={(e) => this.onClickTab(e)}>Global Feed</a>
              </li>
              <li className="nav-item">
                <a className={this.props.tagName ? 'nav-link active' : 'nav-link'} href="">{this.props.tagName && `#${this.props.tagName}`}</a>
              </li>
            </ul>
          </div>

          <ArticleList articles={this.props.articles} />
          <Pagination
            articlesCount={this.props.articlesCount}
            currentPage={this.props.currentPage}
            setPage={(page) => this.props.setPage(page)}
          />
        </div>

        <div className="col-md-3">
          <PopularTags
            tags={this.props.tags}
            fetchListArticlesTag={(tag) => this.props.fetchListArticlesTag(tag)}
          />
        </div>
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
  fetchTags: PropTypes.func.isRequired,
  resetTagName: PropTypes.func.isRequired,
  tagName: PropTypes.string.isRequired,
  fetchListArticlesTag: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  articlesContainer: makeSelectArticlesContainer(),
  articles: selectArticles(),
  articlesCount: selectArticlesCount(),
  currentPage: selectCurrentPage(),
  tags: selectTags(),
  tagName: selectTagName(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchTags: () => dispatch(fetchTags()),
    fetchData: () => dispatch(fetchData()),
    setPage: (page) => dispatch(setPage(page)),
    fetchListArticlesTag: (tag) => dispatch(fetchListArticlesTag(tag)),
    resetTagName: () => dispatch(resetTagName()),
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
