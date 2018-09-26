import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <main>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route component={NotFound} />
        </Switch>

        <Footer />
      </main>
    );
  }
}

export default App;
