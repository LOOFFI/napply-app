import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  const { currentUser } = props;

  return (
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
          <NavLink exact to={`/my-account/${currentUser._id}`}>
            My account
          </NavLink>
        )}

        {!currentUser && (
          <span>
            <NavLink to="/login">Log In</NavLink>
            <button className="btn btn-outline-primary">
              <NavLink to="/signup">Sign Up</NavLink>
            </button>
          </span>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
