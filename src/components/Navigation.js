import React from "react";
import { NavLink } from "react-router-dom";


class Navigation extends React.Component {
  
  render() {
    const { currentUser, logoutClick, className } = this.props;
    
    // console.log("CURRENTUSER!!!!!!!!!!!!!!!!!!!!",currentUser)
    
    

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
