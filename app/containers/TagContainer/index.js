/**
 *
 * TagContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTagContainer, { selectTags } from './selectors';
import reducer from './reducer';
import saga from './saga';
import PopularTags from '../../components/PopularTags';

export class TagContainer extends React.Component {
  componentWillMount() {
    this.props.fetchTags();
  }

  render() {
    return (
      <PopularTags tags={this.props.tags} />
    );
  }
}

TagContainer.propTypes = {
  fetchTags: PropTypes.func.isRequired,
  tags: PropTypes.any.isRequired,
};

const mapStateToProps = createStructuredSelector({
  TagContainer: makeSelectTagContainer(),
  tags: selectTags(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchTags: () => dispatch({ type: 'FETCH_TAGS' }),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'TagContainer', reducer });
const withSaga = injectSaga({ key: 'watcherfetchTags', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TagContainer);
