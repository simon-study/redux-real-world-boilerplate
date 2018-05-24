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
  selectRedirectTo
} from './selectors';
import { selectLoggedIn } from '../LoginContainer/selectors';
import {
  fetchTags,
  getAllArticles,
  setPage,
  fetchListArticlesTag,
  resetTagName,
  getFeedArticles,
} from './actions';
import reducer from './reducer';
import saga from './saga';
import ArticleList from '../../components/ArticleList';
import Pagination from '../../components/Pagination';
import PopularTags from '../../components/PopularTags';
import { makeAuth } from './selectors';

export class ArticlesContainer extends React.Component {
  componentWillMount() {
    const token = window.localStorage.getItem('token');
    this.props.getAllArticles();
    // token ? this.props.getFeedArticles() : this.props.getAllArticles();
    this.props.fetchTags();
  }

  componentWillUnmount() {
    this.props.resetRedirectTo();
  }

  toggleArticleByTab = (e) => {
    e.preventDefault();
    // this.props.getFeedArticles();
    this.props.getAllArticles();
    this.props.resetTagName();
  }

  render() {
    return (
      this.props.redirectTo && this.props.redirectTo.length ? <Redirect to={this.props.redirectTo} /> :
      <div className="row">
        <div className="col-md-9">
          <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
              {/* <li className="nav-item">
                <a className={this.props.tagName ? 'nav-link' : 'nav-link active'}
                  href="" onClick={this.toggleArticleByTab}
                >Your Feed
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link"
                  href="" onClick={this.toggleArticleByTab}
                >Your Feed
                </a>
              </li>
              <li className="nav-item">
                {/* <a className={this.props.tagName ? 'nav-link' : 'nav-link active'} href=""
                  onClick={this.toggleArticleByTab}
                >Global Feed
                </a> */}
                <a className="nav-link" href=""
                  onClick={this.toggleArticleByTab}
                >Global Feed
                </a>
              </li>
              <li className="nav-item">
                <a className={this.props.tagName ? 'nav-link active' : 'nav-link'} href="">
                  {this.props.tagName && `#${this.props.tagName}`}
                </a>
              </li>
            </ul>
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
  getAllArticles: PropTypes.func.isRequired,
  getFeedArticles: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  articles: PropTypes.any.isRequired,
  currentPage: PropTypes.number.isRequired,
  articlesCount: PropTypes.number.isRequired,
  fetchTags: PropTypes.func.isRequired,
  resetTagName: PropTypes.func.isRequired,
  tagName: PropTypes.string.isRequired,
  fetchListArticlesTag: PropTypes.func.isRequired,
  tags: PropTypes.any.isRequired,
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
});

function mapDispatchToProps(dispatch) {
  return {
    fetchTags: () => dispatch(fetchTags()),
    getAllArticles: () => dispatch(getAllArticles()),
    // getFeedArticles: () => console.log('feed'),
    getFeedArticles: () => dispatch({ type: 'GET_FEED_ARTICLES' }),
    setPage: (page) => dispatch(setPage(page)),
    fetchListArticlesTag: (tag) => dispatch(fetchListArticlesTag(tag)),
    resetTagName: () => dispatch(resetTagName()),
    toggleFavorite: (slug, favorited) => dispatch({ type: 'FAVORITE_ARTICLE', slug, favorited }),
    resetRedirectTo: () => dispatch({ type: 'RESET_REDIRECT' }),
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
