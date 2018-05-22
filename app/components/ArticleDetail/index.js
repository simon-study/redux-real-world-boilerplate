/**
*
* ArticleDetail
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import Comment from '../Comment';
import ArticleMeta from '../ArticleMeta';
import ArticleAction from '../ArticleAction';

class ArticleDetail extends React.Component {
  isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  // onToggleFavorite = (slug, favorited) => {
  //   this.props.toggleFavorite(slug, favorited);
  // }

  render() {
    const { article, comments, currentUser } = this.props;
    const checkArticleEmpty = this.isEmpty(article);

    return (
      !checkArticleEmpty &&
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{article.title}</h1>
            <ArticleMeta
              article={article}
              currentUser={currentUser}
              deleteArticle={this.props.deleteArticle}
              isModify={this.props.isModify}
            />
          </div>
        </div>

        <div className="container page">
          <div className="row article-content">
            <div className="col-md-12" dangerouslySetInnerHTML={{ __html: marked(article.body) }}></div>
          </div>
          <hr />
          <ArticleAction
            article={article}
            deleteArticle={this.props.deleteArticle}
            isModify={this.props.isModify}
          />
          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2">
              <Comment comments={comments} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ArticleDetail.propTypes = {
  article: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
};

export default ArticleDetail;
