/**
*
* Settings
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import messages from './messages';
import ListErrors from '../ListErrors';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      username: '',
      bio: '',
      email: '',
      password: '',
    };
  }

  componentWillMount() {
    const { image, username, bio, email } = this.props.currentUser;
    this.setState({
      image,
      username,
      bio,
      email,
    });
  }

  handleChange = (e) => {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = this.state;
    if (!user.password) {
      delete user.password;
    }
    this.props.updateProfile(user);
  }

  isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  render() {
    const {
      image,
      username,
      bio,
      email,
      password,
      errors
    } = this.state;
    const checkErrors = this.isEmpty(this.props.errors);
    return (
      <div className="settings-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Your Settings</h1>
              {!checkErrors && <ListErrors errors={errors} />}
              <form>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="URL of profile picture"
                      name="image"
                      value={image}
                      onChange={this.handleChange}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Your Name"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      rows="8"
                      placeholder="Short bio about you"
                      name="bio"
                      value={bio}
                      onChange={this.handleChange}
                    >
                    </textarea>
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                  </fieldset>
                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    onClick={this.handleSubmit}
                  >
                    Update Settings
                  </button>
                </fieldset>
              </form>

              <hr />

              <button
                className="btn btn-outline-danger"
                onClick={this.props.onClickLogout}
              >
                Or click here to logout.
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  updateProfile: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default Settings;
