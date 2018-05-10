/**
*
* Banner
*
*/

import React from 'react';
// import styled from 'styled-components';


class Banner extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>
    );
  }
}

Banner.propTypes = {

};

export default Banner;
