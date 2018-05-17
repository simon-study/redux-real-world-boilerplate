/**
*
* NewArticle
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class NewArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      content: '',
      tag: '',
      tags: []
    }
  }

  handleChange = (e) => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  handleChangeTag = (e) => {
    this.setState({
      tag: e.target.value
    })
  }

  handleAddTag = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.setState({
        tags: [...this.state.tags, this.state.tag],
        tag: ''
      })
    }
  }

  removeTag = (tag) => {
    this.setState({
      
    })
  }

  render() {
    return (
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            
            <div className="col-md-10 offset-md-1 col-xs-12">
              <form>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Article Title"
                      name="title"
                      onChange={(e) => this.handleChange(e)}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What's this article about?"
                      name="description"
                      onChange={(e) => this.handleChange(e)}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea 
                      className="form-control"
                      rows="8"
                      placeholder="Write your article (in markdown)"
                      name="content"
                      onChange={(e) => this.handleChange(e)}
                    ></textarea>
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter tags"
                      name="tags"
                      value={this.state.tag}
                      onChange={(e) => this.handleChangeTag(e)}
                      onKeyUp={(e) => this.handleAddTag(e)}
                    />
                    <div className="tag-list">
                      {
                        this.state.tags.map((tag) => {
                          return (
                            <span className="tag-default tag-pill" key={tag}>
                              <i className="ion-close-round" onClick={(tag) => this.removeTag(tag)}></i>
                              {tag}
                            </span>
                          )
                        })
                      }
                    </div>
                  </fieldset>
                  <button className="btn btn-lg pull-xs-right btn-primary" type="button">
                    Publish Article
                  </button>
                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

NewArticle.propTypes = {

};

export default NewArticle;
