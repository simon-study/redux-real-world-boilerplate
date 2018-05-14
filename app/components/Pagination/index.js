/**
*
* Pagination
*
*/

import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import messages from './messages';

class Pagination extends React.Component {
  handleSetPage = (e, page) => {
    e.preventDefault();
    this.props.setPage(page);
  }

  render() {
    const paginationList = [];

    for (let i = 0; i < Math.ceil(this.props.articlesCount / 10); i += 1) {
      paginationList.push(i);
    }

    if (!paginationList.length) {
      return (
        <div><FormattedMessage {...messages.loading} /></div>
      );
    }

    return (
      <ul className="pagination">
        {
          paginationList.map((page) => {
            return (
              <li key={page} className={this.props.currentPage === page ? 'page-item active' : 'page-item'} onClick={(e) => this.handleSetPage(e, page)}>
                <a className="page-link" title={`Page ${page}`} href="">{page + 1}</a>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

Pagination.propTypes = {
  setPage: PropTypes.func.isRequired,
  articlesCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
