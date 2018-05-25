/**
*
* Comment
*
*/

import React from 'react';
import marked from 'marked';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CommentInput from '../CommentInput';

class Comment extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.loggedIn ? 
          <div className="col-xs-12 col-md-8 offset-md-2">
            <CommentInput
              submitComment={this.props.submitComment}
              slug={this.props.slug}
            />
            {
              this.props.comments.map((comment) => {
                return (
                  <div key={comment.id} className="card">
                    <div className="card-block">
                      <p className="card-text" dangerouslySetInnerHTML={{ __html: marked(comment.body) }}></p>
                    </div>
                    <div className="card-footer">
                      <NavLink to="" className="comment-author">
                        <img alt={comment.author.username} src={comment.author.image} className="comment-author-img" />
                      </NavLink>
                      &nbsp;
                      <NavLink to="" className="comment-author">{comment.author.username}</NavLink>
                      <span className="date-posted">{new Date(comment.createdAt).toDateString()}</span>
                      {
                        comment.author.username === this.props.currentUser.username &&
                        <span className="mod-options">
                          <i 
                            className="ion-trash-a" 
                            onClick={(slug, id) => this.props.onDeleteComment(this.props.slug, comment.id)}
                          ></i>
                        </span>
                      }
                    </div>
                  </div>
                );
              })
            }
          </div>
          :
          <div className="col-xs-12 col-md-8 offset-md-2">
            <p>
              <NavLink to="/login">Sign in</NavLink>
              &nbsp;or&nbsp;
              <NavLink to="/signup">sign up</NavLink>
              &nbsp;to add comments on this article.
            </p>
          </div>
        }
      </div>
    );
  }
}

Comment.propTypes = {
  comments: PropTypes.any.isRequired,
  slug: PropTypes.string.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  submitComment: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default Comment;
