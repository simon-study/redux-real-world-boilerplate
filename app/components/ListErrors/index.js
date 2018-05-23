/**
*
* ListErrors
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class ListErrors extends React.Component {  

  render() {
    return (
      <ul className="error-messages">
        {
          Object.keys(this.props.errors).map(key => {
            return (
              <li key={key}>
                {key} {this.props.errors[key]}
              </li>
            );
          })
        }
      </ul>
    );
  }
}

ListErrors.propTypes = {

};

export default ListErrors;
