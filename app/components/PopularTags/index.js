/**
*
* PopularTags
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class PopularTags extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="sidebar">
        <p><FormattedMessage {...messages.title}/></p>
          <div className="tag-list">
            {
              this.props.tags.length ? this.props.tags.map((tag, index) => {
                return (
                  <a key={index} href="" className="tag-pill tag-default">{tag}</a>
                )
              }) : <div><FormattedMessage {...messages.loading}/></div>
            }
        </div> 
      </div>
    );
  }
}

PopularTags.propTypes = {

};

export default PopularTags;
