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
  render() {
    return (
      <div className="profile-page">

        <div className="user-info">
          <div className="container">
            <div className="row">

              <div className="col-xs-12 col-md-10 offset-md-1">
                <img src={this.props.profile.image} className="user-img" />
                <h4>{this.props.profile.username}</h4>
                {
                  this.props.profile.bio && <p>{this.props.profile.bio}</p>
                }
                {
                  this.props.currentUser.username === this.props.profile.username ?
                  <NavLink to="/settings" className="btn btn-sm btn-outline-secondary action-btn">
                    <i className="ion-gear-a"></i>&nbsp;Edit Profile Settings
                  </NavLink>:
                  <button className="btn btn-sm btn-outline-secondary action-btn">
                    <i className="ion-plus-round"></i>
                    &nbsp;Follow {this.props.profile.username}
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
                    <a className="nav-link active" href="">My Articles</a>
                  </li>
                  <li className="nav-item">
                    <NavLink to={`${this.props.profile.username}/favorites`} className="nav-link" href="">Favorited Articles</NavLink>
                  </li>
                </ul>
              </div>

              <ArticleList articles={this.props.articlesByAuthor} toggleFavorite={this.props.toggleFavorite} />
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
