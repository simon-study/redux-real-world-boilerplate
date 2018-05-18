/**
*
* SignUp
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { NavLink } from 'react-router-dom';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    this.props.submitRegister(name, email, password);
    console.log(this.state);
  }

  render() {
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign up</h1>
              <p className="text-xs-center">
                <NavLink to="/signin"><FormattedMessage {...messages.haveaccount} /></NavLink>
              </p>

              {/* <ul className="error-messages">
                <li>That email is already taken</li>
              </ul> */}

              <form onSubmit={this.handleSubmit}>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    onChange={(e) => this.handleChange(e)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => this.handleChange(e)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => this.handleChange(e)}
                  />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right">
                  <FormattedMessage {...messages.signup} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {

};

export default SignUp;
