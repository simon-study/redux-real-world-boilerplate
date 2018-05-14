/**
*
* PopularTags
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class PopularTags extends React.Component {
  render() {
    if (!this.props.tags.length) {
      return (
        <div><FormattedMessage {...messages.loading} /></div>
      );
    }

    return (
      <div className="sidebar">
        <p><FormattedMessage {...messages.title} /></p>
        <div className="tag-list">
          {
            this.props.tags.map((tag) => {
              return (
                <a key={this.props.tag} href="" className="tag-pill tag-default">{this.props.tag}</a>
              );
            })
          }
        </div>
      </div>
    );
  }
}

PopularTags.propTypes = {
  tags: PropTypes.any.isRequired,
};

export default PopularTags;
