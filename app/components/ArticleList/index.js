/**
*
* ArticleList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class ArticleList extends React.Component {
  toggleFavorite = (slug, favorited) => {
    if (favorited) {
      this.props.unFavorite(slug)
    } else {
      this.props.favorite(slug)
    } 
  }

  render() {
    if (!this.props.articles.length) {
      return (
        <div className="article-preview">Loading articles...</div>
      );
    }

    return (
      <div>
        {
          this.props.articles.map((article) => {
            return (
              <div key={article.slug} className="article-preview">
                <div className="article-meta">
                  <NavLink to={`/profile/@${article.author.username}`}>
                    <img alt={article.author.username} src={article.author.image} />
                  </NavLink>
                  <div className="info">
                    <NavLink to={`/profile/@${article.author.username}`} className="author">{article.author.username}</NavLink>
                    <span className="date">{new Date(article.createdAt).toDateString()}</span>
                  </div>
                  <button
                    className="btn btn-outline-primary btn-sm pull-xs-right"
                    onClick={(slug, favorited) => this.toggleFavorite(article.slug, article.favorited)}
                  >
                    <i className="ion-heart"></i> {article.favoritesCount}
                  </button>
                </div>

                <NavLink to={`/article/${article.slug}`} className="preview-link">
                  <h1>{article.title}</h1>
                  <p>{article.description}</p>
                  <span>Read more...</span>
                  {
                    <ul className="tag-list">
                      {
                        article.tagList[0] && article.tagList.map((item) => {
                          return (
                            <li key={item} className="tag-default tag-pill tag-outline">
                              {item}
                            </li>
                          );
                        })
                      }
                    </ul>
                  }
                </NavLink>
              </div>
            );
          })
        }
      </div>
    );
  }
}

ArticleList.propTypes = {
  articles: PropTypes.any,
};

export default ArticleList;
