/**
*
* Comment
*
*/

import React from 'react';
import marked from 'marked';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Comment extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.comments.map((comment) => {
            return (
              <div key={comment.id} className="card">
                <div className="card-block">
                  <p className="card-text" dangerouslySetInnerHTML={{ __html: marked(comment.body) }}></p>
                </div>
                <div className="card-footer">
                  <Link to="" className="comment-author">
                    <img alt={comment.author.username} src={comment.author.image} className="comment-author-img" />
                  </Link>
                  &nbsp;
                  <Link to="" className="comment-author">{comment.author.username}</Link>
                  <span className="date-posted">{new Date(comment.createdAt).toDateString()}</span>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

Comment.propTypes = {
  comments: PropTypes.any.isRequired,
};

export default Comment;
