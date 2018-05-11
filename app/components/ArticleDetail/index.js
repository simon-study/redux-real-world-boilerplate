/**
*
* ArticleDetail
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

class ArticleDetail extends React.Component {
  isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  render() {
    const { article } = this.props;
    const checkArticleEmpty = this.isEmpty(article);

    return (
      !checkArticleEmpty &&
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{article.title}</h1>

            <div className="article-meta">
              <a href=""><img src={article.author.image} /></a>
              <div className="info">
                <a href="" className="author">{article.author.username}</a>
                <span className="date">{new Date(article.createdAt).toDateString()}</span>
              </div>
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
            </div> 
          </div>
        </div>

        <div className="container page">
          <div className="row article-content">
            <div className="col-md-12">
              {/* <p>
              Web development technologies have evolved at an incredible clip over the past few years.
              </p>
              <h2 id="introducing-ionic">Introducing RealWorld.</h2>
              <p>It's a great solution for learning how other frameworks work.</p> */}
              <div dangerouslySetInnerHTML={{__html: marked(article.body)}} />
            </div>
          </div>

        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <a href="profile.html"><img src={article.author.image} /></a>
            <div className="info">
              <a href="" className="author">{article.author.username}</a>
              <span className="date">{new Date(article.createdAt).toDateString()}</span>
            </div>

            <button className="btn btn-sm btn-outline-secondary">
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

        <div className="row">
           <div className="col-xs-12 col-md-8 offset-md-2"> 
             <form className="card comment-form"> 
               <div className="card-block">
                <textarea className="form-control" placeholder="Write a comment..." rows="3"></textarea>
              </div>

              <div className="card-footer">
                <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                <button className="btn btn-sm btn-primary">
                Post Comment
                </button>
              </div> 
             </form>  
          </div>
        </div>
        </div>
        
      </div>
    );
  }
}

ArticleDetail.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticleDetail;
