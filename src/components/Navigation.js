import React from "react";
import { NavLink } from "react-router-dom";
import api from "../api";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, logoutClick } = this.props;
    return (
      <header>
        <nav className="header">
          <div className="logo-img">
            <NavLink exact to="/">
              <img
                src="../../images/napply-test-01.png"
                alt="napply-logo"
                className="navbar-brand"
              />
            </NavLink>
          </div>
          <div className="right-links">
            {currentUser && (
              <NavLink exact to="/">
                Home
              </NavLink>
            )}
            {currentUser && (
              <NavLink exact to={`/my-account/${currentUser._id}`}>
                My account
              </NavLink>
            )}
            {currentUser && (
              <span>
                <button
                  onClick={() => logoutClick()}
                  className="btn btn-outline-primary"
                >
                  Log out
                </button>
              </span>
            )}
            {!currentUser && (
              <span>
                <NavLink exact to="/login">
                  Log In
                </NavLink>
                <button className="btn btn-outline-primary">
                  <NavLink exact to="/signup">
                    Sign Up
                  </NavLink>
                </button>
              </span>
            )}
          </div>
        </nav>
      </header>
    );
  }
}
export default Navigation;
