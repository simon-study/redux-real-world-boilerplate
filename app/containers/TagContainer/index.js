/**
 *
 * TagContainer
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
import makeSelectTagContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import PopularTags from '../../components/PopularTags';

export class TagContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.fetchTags()
  }

  render() {
    return (
      <PopularTags tags={this.props.tags.tags}/>
    );
  }
}

TagContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tags: makeSelectTagContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchTags: () => dispatch({ type: 'FETCH_TAGS' }),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'tags', reducer });
const withSaga = injectSaga({ key: 'watcherfetchTags', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TagContainer);
