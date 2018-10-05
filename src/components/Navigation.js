import React from "react";
import { NavLink } from "react-router-dom";
import api from "../api";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLinks: false,
    }
  }

  render() {
    const { currentUser, logoutClick, className } = this.props;
    const { showLinks } = this.state;
    console.log("CURRENTUSER!!!!!!!!!!!!!!!!!!!!",currentUser)
    return (
      <header className={className}>
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
            {(showLinks) && <h1>COUCOU</h1>}
            {!currentUser && (
              <span>
                <NavLink exact to="/login">
                  Log In
                </NavLink>
                <NavLink exact to="/signup" className="signup-btn">
                  <button className="btn btn-outline-primary">Sign Up</button>
                </NavLink>
              </span>
            )}
          </div>
        </nav>
      </header>
    );
  }
}
export default Navigation;
