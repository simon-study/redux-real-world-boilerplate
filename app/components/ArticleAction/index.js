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

  render() {
    const { article, currentUser } = this.props;
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

          <button className="btn btn-sm btn-outline-secondary" onClick={this.onFollow}>
            <i className="ion-plus-round"></i>
            &nbsp;
            Follow {article.author.username} <span className="counter">(10)</span>
          </button>
          &nbsp;
          <button className="btn btn-sm btn-outline-primary">
            <i className="ion-heart"></i>
            &nbsp;
            Favorite Post <span className="counter">({article.favoritesCount})</span>
          </button>
        </div>
      </div>
    );
  }
}

ArticleAction.propTypes = {

};

export default ArticleAction;
