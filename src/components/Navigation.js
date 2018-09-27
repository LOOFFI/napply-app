import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  const { currentUser } = props;
  return (
    <nav className="header">
      <NavLink exact to="/">
        Home
      </NavLink>
      {currentUser && (
        <NavLink exact to="/my-account">
          My account
        </NavLink>
      )}
      {!currentUser && (
        <span>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </span>
      )}
    </nav>
  );
}

export default Navigation;
