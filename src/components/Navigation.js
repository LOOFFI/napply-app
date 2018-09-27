import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  const { currentUser } = props;
  return (
    <nav className="header navbar">
      <NavLink exact to="/">
        Home
      </NavLink>
      {!currentUser && (
        <span>
          <NavLink to="/login">Log In</NavLink>
          <button className="btn btn-outline-primary">
            <NavLink to="/signup">Sign Up</NavLink>
          </button>
        </span>
      )}
    </nav>
  );
}

export default Navigation;
