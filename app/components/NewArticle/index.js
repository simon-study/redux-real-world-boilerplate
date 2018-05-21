/**
*
* NewArticle
*
*/

import React from 'react';
import { Redirect } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import ListErrors from '../ListErrors';

class NewArticle extends React.Component {
  componentWillUnmount() {
    this.props.resetArticle();
  }

  onChangeTitle = (e) => {
    this.props.changeTitle(e.target.value);
  }

  onChangeDescription = (e) => {
    this.props.changeDescription(e.target.value);
  }

  onChangeBody = (e) => {
    this.props.changeBody(e.target.value);
  }

  onChangeTag = (e) => {
    this.props.changeTag(e.target.value);
  }

  onAddTag = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.props.addTag(this.props.tag);
      this.props.resetTag();
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const article = {
      title: this.props.title,
      description: this.props.description,
      body: this.props.body,
      tagList: this.props.tagList
    }
    this.props.submitForm(article);
  }

  isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  render() {
    return (
      !this.isEmpty(this.props.article) ? <Redirect to={`/article/${this.props.article.slug}`}/> :
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              <ListErrors errors={this.props.errors}/>
              <form>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Article Title"
                      name="title"
                      value={this.props.title}
                      onChange={this.onChangeTitle}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What's this article about?"
                      name="description"
                      value={this.props.description}
                      onChange={this.onChangeDescription}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea 
                      className="form-control"
                      rows="8"
                      placeholder="Write your article (in markdown)"
                      name="content"
                      value={this.props.body}
                      onChange={this.onChangeBody}
                    ></textarea>
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter tags"
                      name="tags"
                      value={this.props.tag}
                      onChange={this.onChangeTag}
                      onKeyUp={this.onAddTag}
                    />
                    <div className="tag-list">
                      {
                        this.props.tagList && this.props.tagList.length > 0 && this.props.tagList.map(tag => {
                          return (
                            <span className="tag-default tag-pill" key={tag}>
                              <i  className="ion-close-round">
                              </i>
                              {tag}
                            </span>
                          );
                        })
                      }
                    </div>
                  </fieldset>
                  <button
                    className="btn btn-lg pull-xs-right btn-primary"
                    type="button"
                    onClick={this.onSubmit}>
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
