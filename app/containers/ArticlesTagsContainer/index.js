/**
 *
 * ArticlesTagsContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectArticlesTagsContainer, { selectArticlesTag } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class ArticlesTagsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props.articlesTag)
    return (
      <div>
        <Helmet>
          <title>ArticlesTagsContainer</title>
          <meta name="description" content="Description of ArticlesTagsContainer" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ArticlesTagsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  articlestagscontainer: makeSelectArticlesTagsContainer(),
  articlesTag: selectArticlesTag(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'articlesTagsContainer', reducer });
const withSaga = injectSaga({ key: 'articlesTagsContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ArticlesTagsContainer);
