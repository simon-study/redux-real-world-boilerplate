/**
*
* Pagination
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Pagination extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleSetPage = (e, page) => {
    e.preventDefault();
    this.props.setPage(page)
  }

  render() {
    const paginationList = [];
    
    for (let i = 0; i < Math.ceil(this.props.articlesCount/10); i++) {
      paginationList.push(i);
    }

    return (
      <ul className="pagination">
        {
          paginationList.length ? paginationList.map((page, index) => {
            return (
              <li key={index} className={this.props.currentPage === page ? 'page-item active' : 'page-item'} onClick={(e) => this.handleSetPage(e, page)}>
                <a className="page-link" href="">{page + 1}</a>
              </li>
            )
          }) : <div><FormattedMessage {...messages.loading}/></div>
        }
      </ul>
    );
  }
}

Pagination.propTypes = {

};

export default Pagination;
