/**
 *
 * ProfileContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProfileContainer, {
  makeSelectError,
  makeSelectProfile,
  makeSelectArticlesByAuthor,
  makeSelectArticlesCountByAuthor,
  selectCurrentUser,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import Profile from '../../components/Profile';
import NotFound from '../NotFoundPage';
import { resetSetting } from '../SettingsContainer/actions';

export class ProfileContainer extends React.Component {
  componentWillMount() {
    const username = this.props.match.params.username;
    this.props.getUserProfile(username);
    this.props.getArticlesByAuthor(username);

  }

  componentWillReceiveProps(nextProps) {
    const currentName = this.props.match.params.username;
    const nextName = nextProps.match.params.username;

    if (nextName !== currentName) {
      this.props.getUserProfile(nextName);
      this.props.getArticlesByAuthor(nextName);
    }
  }

  componentWillUnmount() {
    const { resetProfileByAuthor, resetArticlesByAuthor } = this.props;
    resetProfileByAuthor();
    resetArticlesByAuthor();
  }

  render() {
    const { error, profile, articlesByAuthor, currentUser } = this.props;
    return (
      error
      ? <NotFound content={error} />
      : <Profile {...this.props}/>
    );
  }
}

ProfileContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profilecontainer: makeSelectProfileContainer(),
  profile: makeSelectProfile(),
  error: makeSelectError(),
  articlesByAuthor: makeSelectArticlesByAuthor(),
  articlesCountByAuthor: makeSelectArticlesCountByAuthor(),
  currentUser: selectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    getUserProfile: (username) => { dispatch({ type: 'GET_PROFILE_BY_AUTHOR', username }); dispatch(resetSetting()) },
    getArticlesByAuthor: (username) => dispatch({ type: 'GET_ARTICLES_BY_AUTHOR', username }),
    resetProfileByAuthor: () => dispatch({ type: 'RESET_PROFILE_BY_AUTHOR' }),
    resetArticlesByAuthor: () => dispatch({ type: 'RESET_ARTICLES_BY_AUTHOR' }),
    toggleFavorite: (slug, favorited) => dispatch({ type: 'FAVORITE_ARTICLE', slug, favorited }),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'profileContainer', reducer });
const withSaga = injectSaga({ key: 'profileContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProfileContainer);
