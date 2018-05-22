/**
*
* ArticleAction
*
*/

import React from 'react';
import { NavLink } from 'react-router-dom';

class ArticleAction extends React.Component {
  onFollow = () => {

  }

  onDeleteArticle = () => {
    this.props.deleteArticle(this.props.article.slug);
  }

  render() {
    const { article, currentUser, isModify } = this.props;
    return (
      <div className="article-actions">
        <div className="article-meta">
          <NavLink to={`/profile/@${article.author.username}`}>
            <img alt={article.author.username} src={article.author.image} />
          </NavLink>
          <div className="info">
            <NavLink to={`/profile/@${article.author.username}`} className="author">
              {article.author.username}
            </NavLink>
            <span className="date">{new Date(article.createdAt).toDateString()}</span>
          </div>

          {
            isModify ?
            <span>
              <NavLink
                to={`/editor/${article.slug}`}
                className="btn btn-outline-secondary btn-sm">
                <i className="ion-edit"></i> Edit Article
              </NavLink>
              &nbsp;&nbsp;
              <button className="btn btn-outline-danger btn-sm" onClick={this.onDeleteArticle}>
                <i className="ion-trash-a"></i> Delete Article
              </button>
            </span>
            :
            <span>
              <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-plus-round"></i>
                &nbsp;
                Follow {article.author.username} <span className="counter">(10)</span>
              </button>
              &nbsp;&nbsp;
              <button className="btn btn-sm btn-outline-primary">
                <i className="ion-heart"></i>
                &nbsp;
                Favorite Post <span className="counter">({article.favoritesCount})</span>
              </button>
            </span>
          }
        </div>
      </div>
    );
  }
}

ArticleAction.propTypes = {

};

export default ArticleAction;
