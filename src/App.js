import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import api from "./api";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Booking from "./components/Booking";
import DateAndTime from "./components/DateAndTime";
import Options from "./components/Options";
import Payment from "./components/Payment";
import MyAccount from "./components/MyAccount";
import "./App.css";
import "./Auth.css";
import AdminPage from "./components/AdminPage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      bookingId: null
    };
  }

  componentDidMount() {
    api
      .get("/checklogin")
      .then(response => {
        // console.log("LOGGED IN USER 🤔", response.data);
        // console.log("CURRENT USER", this.state.currentUser);
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
    const { location } = this.props;
    const linkPieces = location.pathname.split("/");

    return (
      <main>
        <Navigation
          className={linkPieces[1]}
          currentUser={currentUser}
          logoutClick={() => this.logoutClick()}
        />

        <Switch>
          <Route
            exact path="/"
            render={() => <HomePage currentUser={currentUser} />}
          />
          <Route
            exact path="/signup"
            render={() => (
              <SignUp
                currentUser={currentUser}
                onSignUp={userDoc => this.setState({ currentUser: userDoc })}
              />
            )}
          />
          <Route
            exact path="/login"
            render={() => (
              <Login
                currentUser={currentUser}
                onLogin={userDoc => this.setState({ currentUser: userDoc })}
              />
            )}
          />
          <Route
            exact path="/admin"
            render={() => <AdminPage currentUser={currentUser} />}
          />
          <Route
            exact path="/booking"
            render={() => <Booking currentUser={currentUser}/>}
          />
          <Route
            exact path="/booking-date/:bookingId"
            component={DateAndTime}
          />
          <Route exact path="/options/:bookingId" component={Options} />
          <Route exact path="/payment/:bookingId" component={Payment} />
          <Route
            exact path="/my-account/:userId"
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

        {/* <Footer /> */}
      </main>
    );
  }
}

export default withRouter(App);
