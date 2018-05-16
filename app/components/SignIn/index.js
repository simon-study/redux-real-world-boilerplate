/**
*
* SignIn
*
*/

import React from 'react';
import { NavLink } from 'react-router-dom';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  isEmpty = (obj) => Object.keys(obj).length === 0;

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  
  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })    
  }

  onSubmitLogin = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.handleLogin(email, password);
  }

  render() {
    const { errors } = this.props;
    const checkErrors = this.isEmpty(this.props.errors);
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <NavLink exact to="/signup">
                  Need an account?
                </NavLink>
              </p>

              <ul className="error-messages">
                {
                  !checkErrors && Object.keys(errors).map((item) => {
                    return (
                      <li>{item} {errors[item]}</li>
                    )
                  })
                }
              </ul>

              <form onSubmit={(e) => this.onSubmitLogin(e)}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => this.onChangeEmail(e)}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => this.onChangePassword(e)}
                    />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"                    
                  >
                    Sign in
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {

};

export default SignIn;
