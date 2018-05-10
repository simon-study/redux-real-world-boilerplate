import React, { Component } from 'react';
import Banner from './Banner';
import ArticlesContainer from '../containers/ArticlesContainer'
import TagContainer from '../containers/TagContainer';


class Home extends Component {
  // handleSetPage = (e) => {
  //   e.preventDefault();
  //   console.log('click');
  // }

  // setPage = (page) => {
  //   console.log(page);
  // }

  render() {
    // const paginationList = [];
    
    // for (let i = 0; i < Math.ceil(this.props.articlesCount/10); i++) {
    //   paginationList.push(i);
    // }    
    
    return(
      <div className="home-page">
        <Banner />        
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  {/* <li className="nav-item">
                    <a className="nav-link disabled" href="">Your Feed</a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link active" href="">Global Feed</a>
                  </li>
                </ul>
              </div>
              <ArticlesContainer />
            </div>

            <div className="col-md-3">
              <TagContainer /> 
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default Home;