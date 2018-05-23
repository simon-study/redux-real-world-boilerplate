/**
*
* CommentInput
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
  }

  onChange = (e) => {
    this.setState({
      body: e.target.value
    });
  }

  createComment = (e) => {
    e.preventDefault();
    this.props.submitComment(this.props.slug, this.state.body);
  }

  render() {
    return (
      <form className="card comment-form" onSubmit={this.createComment}>
        <div className="card-block">
          <textarea className="form-control"
            placeholder="Write a comment..."
            value={this.state.body}
            onChange={this.onChange}
            rows="3">
          </textarea>
        </div>
        <div className="card-footer">
          {/* <img
            src={this.props.currentUser.image}
            className="comment-author-img"
            alt={this.props.currentUser.username} /> */}
          <button
            className="btn btn-sm btn-primary"
            type="submit">
            <FormattedMessage {...messages.btnPostComment} />
          </button>
        </div>
      </form>
    );
  }
}

CommentInput.propTypes = {

};

export default CommentInput;
