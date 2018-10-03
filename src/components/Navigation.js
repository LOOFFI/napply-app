import React from "react";
import { NavLink } from "react-router-dom";
import api from "../api";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   currentUser: null
    // };
  }

  // logoutClick() {
  //   api
  //     .delete("/logout")
  //     .then(() => {
  //       this.updateUser(null);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       alert("Sorry! Something went wrong. 💩");
  //     });
  // }

  // updateUser(userDoc) {
  //   this.setState({ currentUser: userDoc });
  // }

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
            {currentUser && <NavLink to="/">Home</NavLink>}
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
                  Log Out
                </button>
              </span>
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
      </header>
    );
  }
}
export default Navigation;
