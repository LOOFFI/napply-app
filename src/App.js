import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

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
import "./App.css";
import "./Auth.css";
import AdminPage from "./components/AdminPage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    api
      .get("/checklogin")
      .then(response => {
        console.log("Check LOG IN 🤔", response.data);
        this.setState({ currentUser: response.data.userDoc });
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! There was a problem.");
      });
  }

  logoutClick() {
    api
      .delete("/logout")
      .then(() => {
        this.setState({ currentUser: null });
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! Something went wrong.");
      });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <main>
        <Navigation
          currentUser={currentUser}
          logoutClick={() => this.logoutClick()}
        />

        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage currentUser={currentUser} />}
          />
          <Route
            exact
            path="/signup"
            render={() => (
              <SignUp
                currentUser={currentUser}
                onSignUp={userDoc => this.setState({ currentUser: userDoc })}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={() => (
              <Login
                currentUser={currentUser}
                onLogin={userDoc => this.setState({ currentUser: userDoc })}
              />
            )}
          />
          <Route
            exact
            path="/admin"
            render={() => <AdminPage currentUser={currentUser} />}
          />
          <Route
            exact
            path="/location"
            render={() => <Location currentUser={currentUser} />}
          />
          <Route
            exact
            path="/booking-date/:bookingId"
            component={DateAndTime}
          />
          <Route exact path="/options/:bookingId" component={Options} />
          <Route exact path="/payment/:bookingId" component={Payment} />
          <Route
            exact
            path="/validate/:bookingId"
            component={ValidateBooking}
          />
          <Route
            exact
            path="/my-account/:userId"
            render={({ match }) => (
              <MyAccount
                editAccount={userDoc => this.setState({ currentUser: userDoc })}
                match={match}
                currentUser={currentUser}
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
