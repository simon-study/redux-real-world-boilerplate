/**
*
* ItemError
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class ItemError extends React.Component {
  render() {
    return (
      <li>{this.props.value}</li>
    );
  }
}

ItemError.propTypes = {

};

export default ItemError;
