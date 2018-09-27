import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import api from "./api";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Location from "./components/Location";
import DateAndTime from "./components/DateAndTime";
import Options from "./components/Options";
import Payment from "./components/Payment";
import ValidateBooking from "./components/ValidateBooking";
import MyAccount from "./components/MyAccount";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    // check with the backend to see if we are already logged in
    api
      .get("/checklogin")
      .then(response => {
        console.log("Check LOG IN 🤔", response.data);
        this.updateUser(response.data.userDoc);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! There was a problem. 💩");
      });
  }

  updateUser(userDoc) {
    this.setState({ currentUser: userDoc });
  }

  logoutClick() {
    api
      .delete("/logout")
      .then(() => {
        this.updateUser(null);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! Something went wrong. 💩");
      });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <main>
        <header>
          <Navigation currentUser={currentUser} />

          {currentUser && (
            <span>
              <b>{currentUser.fullName}</b>
              <button onClick={() => this.logoutClick()}>Log Out</button>
            </span>
          )}
        </header>

        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage currentUser={currentUser} />}
          />
          <Route
            path="/signup"
            render={() => (
              <SignUp
                currentUser={currentUser}
                onSignUp={userDoc => this.updateUser(userDoc)}
              />
            )}
          />
          <Route
            path="/login"
            render={() => (
              <Login
                currentUser={currentUser}
                onLogin={userDoc => this.updateUser(userDoc)}
              />
            )}
          />
          <Route path="/location" component={Location} />
          <Route path="/booking-date" component={DateAndTime} />
          <Route path="/options" component={Options} />
          <Route path="/payment" component={Payment} />
          <Route path="/validate" component={ValidateBooking} />
          <Route
            exact
            path="/my-account/:userId"
            render={({ match }) => (
              <MyAccount
                editAccount={userDoc => this.updateUser(userDoc)}
                match={match}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </main>
    );
  }
}

export default App;
