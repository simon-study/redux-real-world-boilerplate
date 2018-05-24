/**
*
* Arcordion
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Arcordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: this.props.loggedIn ? 'feed' : 'all'
    }
  }
  toggleArticleByTab = (e) => {
    e.preventDefault();
    this.props.toggleListArticle(e.target.dataset.tab);
    this.props.resetTagName();
    this.setState({
      tab: e.target.dataset.tab
    })
  }
  render() {
    return (
      <ul className="nav nav-pills outline-active">
        {
          this.props.loggedIn &&
          <li className="nav-item">
            <a className={this.state.tab === 'feed' ? 'nav-link active' : 'nav-link'}
              data-tab="feed"
              href="" onClick={this.toggleArticleByTab}
            >Your Feed
            </a>
          </li>
        }
        <li className="nav-item">
          <a className={this.state.tab === 'all' ? 'nav-link active' : 'nav-link'} href=""
            data-tab="all"
            onClick={this.toggleArticleByTab}
          >Global Feed
          </a>
        </li>
        <li className="nav-item">
          <a className={this.props.tagName ? 'nav-link active' : 'nav-link'} href="">
            {this.props.tagName && `#${this.props.tagName}`}
          </a>
        </li>
      </ul>
    );
  }
}

Arcordion.propTypes = {

};

export default Arcordion;
