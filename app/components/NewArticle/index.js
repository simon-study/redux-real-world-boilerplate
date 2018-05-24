/**
*
* NewArticle
*
*/
import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';
import ListErrors from '../ListErrors';

class NewArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: '',
      tag: '',
      tagList: [],
    }
  }
  componentWillUnmount() {
    this.props.resetArticle();
  }

  onChangeInput = (e) => {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  onAddTag = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      if (this.state.tagList.indexOf(this.state.tag) === -1) {
        this.setState(previousState => ({
          tagList: [...previousState.tagList, this.state.tag],
          tag: '',
        }));
      }
    }
  }

  onDeleteTag = (tag) => {
    this.setState((previousState) => {
      return {
        tagList: previousState.tagList.filter(item => {
          return item !== tag
        })
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { title, description, body, tagList } = this.state;
    const article = {
      title,
      description,
      body,
      tagList,
    }
    this.props.submitForm(article);
  }

  isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  render() {
    const { title, description, body, tag, tagList } = this.state;
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
                      value={title}
                      onChange={this.onChangeInput}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What's this article about?"
                      name="description"
                      value={description}
                      onChange={this.onChangeInput}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea 
                      className="form-control"
                      rows="8"
                      placeholder="Write your article (in markdown)"
                      name="body"
                      value={body}
                      onChange={this.onChangeInput}
                    ></textarea>
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter tags"
                      name="tag"
                      value={tag}
                      onChange={this.onChangeInput}
                      onKeyUp={this.onAddTag}
                    />
                    <div className="tag-list">
                      {
                        tagList && tagList.length > 0 && tagList.map(tag => {
                          return (
                            <span className="tag-default tag-pill" key={tag} >
                              <i  className="ion-close-round" onClick={() => this.onDeleteTag(tag)}>
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
  resetArticle: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
  changeDescription: PropTypes.func.isRequired,
  changeBody: PropTypes.func.isRequired,
  changeTag: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NewArticle;
