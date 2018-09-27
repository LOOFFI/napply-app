import React from "react";
import { Redirect } from "react-router-dom";

import api from "../api";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      originalPassword: ""
    };
  }

  updateEmail(event) {
    const { value } = event.target;
    this.setState({ email: value });
  }

  updateOriginalPassword(event) {
    const { value } = event.target;
    this.setState({ originalPassword: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    api
      .post("/login", this.state)
      .then(response => {
        console.log("Log in 👍", response.data);
        const { onLogin } = this.props;
        onLogin(response.data.userDoc);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! Something went wrong. 💩");
      });
  }

  render() {
    const { currentUser } = this.props;
    const { email, originalPassword } = this.state;

    if (currentUser) {
      return <Redirect to="/" />;
    }

    return (
      <section>
        <h2>Log In</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Email:
            <input
              value={email}
              type="email"
              placeholder="myemail@gmail.com"
              onChange={event => this.updateEmail(event)}
            />
          </label>

          <label>
            Password:
            <input
              value={originalPassword}
              type="password"
              placeholder="Your password"
              onChange={event => this.updateOriginalPassword(event)}
            />
          </label>

          <button>Log In</button>
        </form>
      </section>
    );
  }
}

export default Login;
