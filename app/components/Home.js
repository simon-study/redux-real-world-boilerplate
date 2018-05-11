import React from 'react';
import Banner from './Banner';
import ArticlesContainer from '../containers/ArticlesContainer';
import TagContainer from '../containers/TagContainer';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Banner />
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <a className="nav-link active" href="">Global Feed</a>
                  </li>
                </ul>
              </div>
              <ArticlesContainer />
            </div>

            <div className="col-md-3">
              <TagContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
