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
import { Redirect } from 'react-router-dom';
import makeSelectArticlesContainer, {
  selectArticles,
  selectArticlesCount,
  selectCurrentPage,
  selectTags,
  selectTagName,
  selectRedirectTo,
  selectLoggedIn,
  makeAuth,
  selectTab,
} from './selectors';
import {
  fetchTags,
  getAllArticles,
  setPage,
  fetchListArticlesTag,
  resetTagName,
  // getFeedArticles,
} from './actions';
import reducer from './reducer';
import saga from './saga';
import ArticleList from '../../components/ArticleList';
import Pagination from '../../components/Pagination';
import PopularTags from '../../components/PopularTags';
import Arcordion from '../../components/Arcordion';
// import { makeAuth } from './selectors';

export class ArticlesContainer extends React.Component {
  componentWillMount() {
    this.props.getAllArticles();
    this.props.fetchTags();
    // this.props.getTab();
  }

  componentWillUnmount() {
    this.props.resetRedirectTo();
    this.props.resetTagName();
  }

  toggleArticleByTab = (e) => {
    e.preventDefault();
    this.props.toggleListArticle(e.target.dataset.tab);
    this.props.resetTagName();
  }

  render() {
    return (
      this.props.redirectTo && this.props.redirectTo.length ? <Redirect to={this.props.redirectTo} /> :
      <div className="row">
        <div className="col-md-9">
          <div className="feed-toggle">
            <Arcordion
              toggleListArticle={this.props.toggleListArticle}
              resetTagName={this.props.resetTagName}
              tagName={this.props.tagName}
              loggedIn={this.props.loggedIn}
              tab={this.props.tab}
            />
          </div>

          <ArticleList
            articles={this.props.articles}
            toggleFavorite={(slug, favorited) => this.props.toggleFavorite(slug, favorited)}
          />
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
  getAllArticles: PropTypes.func,
  articlesCount: PropTypes.number,
  setPage: PropTypes.func,
  currentPage: PropTypes.number,
  fetchTags: PropTypes.func,
  resetTagName: PropTypes.func,
  fetchListArticlesTag: PropTypes.func,
  tags: PropTypes.any,
  redirectTo: PropTypes.string,
  toggleFavorite: PropTypes.func,
  toggleListArticle: PropTypes.func,
  loggedIn: PropTypes.bool,
  articles: PropTypes.any,
  tab: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  articlesContainer: makeSelectArticlesContainer(),
  articles: selectArticles(),
  articlesCount: selectArticlesCount(),
  currentPage: selectCurrentPage(),
  tags: selectTags(),
  tagName: selectTagName(),
  auth: makeAuth(),
  redirectTo: selectRedirectTo(),
  loggedIn: selectLoggedIn(),
  tab: selectTab(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchTags: () => dispatch(fetchTags()),
    getAllArticles: () => dispatch(getAllArticles()),
    // getFeedArticles: () => dispatch({ type: 'GET_FEED_ARTICLES' }),
    setPage: (page) => dispatch(setPage(page)),
    fetchListArticlesTag: (tag) => dispatch(fetchListArticlesTag(tag)),
    resetTagName: () => dispatch(resetTagName()),
    toggleFavorite: (slug, favorited) => dispatch({ type: 'FAVORITE_ARTICLE', slug, favorited }),
    resetRedirectTo: () => dispatch({ type: 'RESET_REDIRECT' }),
    toggleListArticle: (tab) => dispatch({ type: 'TOGGLE_LIST_ARTICLES', tab }),
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
