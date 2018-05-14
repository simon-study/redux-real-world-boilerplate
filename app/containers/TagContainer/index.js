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
import { fetchListArticlesTag } from './actions';

export class TagContainer extends React.Component {
  componentWillMount() {
    this.props.fetchTags();
  }

  render() {
    return (
      <PopularTags
        tags={this.props.tags}
        fetchListArticlesTag={(tag) => this.props.fetchListArticlesTag(tag)}
      />
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
    fetchListArticlesTag: (tag) => dispatch({ type: 'FETCH_ARTICLES_TAGS', tag }),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'TagContainer', reducer });
const withSaga = injectSaga({ key: 'root', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TagContainer);
