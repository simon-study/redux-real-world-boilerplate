import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class HeaderLogin extends React.PureComponent {
  render() {
    return(
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">conduit</a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/newpost" className="nav-link">
                <i className="ion-compose"></i>&nbsp;New Post
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/settings' className="nav-link">
                <i className="ion-gear-a"></i>&nbsp;Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}