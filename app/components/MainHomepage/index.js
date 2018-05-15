/**
*
* MainHomepage
*
*/

import React from 'react';
import Banner from '../Banner';
import ArticlesContainer from '../../containers/ArticlesContainer';

class MainHomepage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Banner />
        <div className="container page">
          <ArticlesContainer />
        </div>
      </div>
    );
  }
}

MainHomepage.propTypes = {

};

export default MainHomepage;
