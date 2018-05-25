/**
*
* ListErrors
*
*/

import React from 'react';
import PropTypes from 'prop-types';

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
