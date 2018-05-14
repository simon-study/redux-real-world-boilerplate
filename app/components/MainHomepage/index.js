/**
*
* MainHomepage
*
*/

import React from 'react';
import Banner from '../Banner';
import ArticlesContainer from '../../containers/ArticlesContainer';
import ArticlesTagsContainer from '../../containers/ArticlesTagsContainer';
import TagContainer from '../../containers/TagContainer';

class MainHomepage extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
