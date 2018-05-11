/**
*
* ArticleList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ArticleList extends React.Component {
  render() {
    if (!this.props.articles.length) {
      return (
        <div className="article-preview">Loading articles...</div>
      );
    }

    return (
      <div>
        {
          this.props.articles.map(article => {
            return (
              <div key={article.slug} className="article-preview">
                <div className="article-meta">
                  <a href="profile.html">
                    <img alt={article.author.username} src={article.author.image} />
                  </a>
                  <div className="info">
                    <a href="" className="author">{article.author.username}</a>
                    <span className="date">{new Date(article.createdAt).toDateString()}</span>
                  </div>
                  <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> {article.favoritesCount}
                  </button>
                </div>

                <Link to={`/article/${article.slug}`} className="preview-link">
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
                </Link>
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
