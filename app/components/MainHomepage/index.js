/**
*
* MainHomepage
*
*/

import React from 'react';
import Banner from '../Banner';
import ArticlesContainer from '../../containers/ArticlesContainer';

const MainHomepage = () => (
  <div className="home-page">
    <Banner />
    <div className="container page">
      <ArticlesContainer />
    </div>
  </div>
);

export default MainHomepage;
