/**
*
* Profile
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ArticleList from '../ArticleList';

class Profile extends React.Component {
  onToggleFollow = () => {
    const {username, following} = this.props.profile;
    this.props.handleToggleFollow(username, following)
  }

  toggleTab = (e) => {
    const tab = e.target.dataset.tab;
    const { username } = this.props.profile;
    console.log(tab, username);
    this.props.toggleArticleByAuthor(tab, username);
  }

  render() {
    const { image, username, bio, following } = this.props.profile;
    return (
      <div className="profile-page">
        <div className="user-info">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <img src={image} className="user-img" />
                <h4>{username}</h4>
                {
                  bio && <p>{bio}</p>
                }
                {
                  this.props.currentUser.username === this.props.profile.username ?
                  <NavLink to="/settings" className="btn btn-sm btn-outline-secondary action-btn">
                    <i className="ion-gear-a"></i>&nbsp;Edit Profile Settings
                  </NavLink>
                  :
                  <button 
                    className="btn btn-sm btn-outline-secondary action-btn"
                    onClick={this.onToggleFollow}
                  >
                    <i className="ion-plus-round"></i>
                    &nbsp;
                    { following ? 'Unfollow' : 'Follow' }
                    &nbsp;
                    { username }
                  </button>
                }
              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">

            <div className="col-xs-12 col-md-10 offset-md-1">
              <div className="articles-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <NavLink to={`/profile/@${username}`}
                      exact className='nav-link'
                      data-tab="author"
                      onClick={this.toggleTab}
                    >
                      My Articles
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to={`/profile/@${username}/favorites`}
                      className='nav-link'
                      data-tab="favorited"
                      onClick={this.toggleTab}
                    >
                      Favorited Articles
                    </NavLink>
                  </li>
                </ul>
              </div>

              <ArticleList
                articles={this.props.articlesByAuthor}
                toggleFavorite={this.props.toggleFavorite}
              />
            </div>

          </div>
        </div>

      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  articlesByAuthor: PropTypes.array.isRequired,
};

export default Profile;
