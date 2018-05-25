/**
*
* Arcordion
*
*/

import React from 'react';
import PropTypes from 'prop-types';

class Arcordion extends React.Component {
  toggleArticleByTab = (e) => {
    e.preventDefault();
    this.props.toggleListArticle(e.target.dataset.tab);
    this.props.resetTagName();
  }

  render() {
    return (
      <ul className="nav nav-pills outline-active">
        {
          this.props.loggedIn &&
          <li className="nav-item">
            <a className={this.props.tab === 'feed' ? 'nav-link active' : 'nav-link'}
              data-tab="feed"
              href=""
              onClick={this.toggleArticleByTab}
            >Your Feed
            </a>
          </li>
        }
        <li className="nav-item">
          <a className={this.props.tab === 'all' ? 'nav-link active' : 'nav-link'} href=""
            data-tab="all"
            onClick={this.toggleArticleByTab}
          >Global Feed
          </a>
        </li>
        <li className="nav-item">
          <a
            className={this.props.tagName ? 'nav-link active' : 'nav-link'}
            href=""
          >
            {this.props.tagName && `#${this.props.tagName}`}
          </a>
        </li>
      </ul>
    );
  }
}

Arcordion.propTypes = {
  tagName: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
  toggleListArticle: PropTypes.func.isRequired,
  resetTagName: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default Arcordion;
