import React from "react";
import { Redirect } from "react-router-dom";

import api from "../api";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      originalPassword: "",
      emailActive: false,
      passwordActive: false
    };
  }

  activateEmail() {
    this.setState({
      emailActive: true
    });
  }

  disableEmail(event) {
    if (event.target.value === "") {
      this.setState({
        emailActive: false
      });
    }
  }

  activatePassword() {
    this.setState({
      passwordActive: true
    });
  }

  disablePassword(event) {
    if (event.target.value === "") {
      this.setState({
        passwordActive: false
      });
    }
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
        alert("Invalid Email or Password");
      });
  }

  render() {
    const { currentUser } = this.props;
    const { email, originalPassword } = this.state;

    if (currentUser) {
      return <Redirect to="/" />;
    }

    return (
      <section className="signup-form">
        <h2>LOG IN</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group">
            <div className="form-field">
              <label className={this.state.emailActive ? "field-active" : ""}>
                Email
              </label>
              <input
                value={email}
                type="email"
                className="floating-label"
                onChange={event => this.updateEmail(event)}
                onFocus={() => this.activateEmail()}
                onBlur={event => this.disableEmail(event)}
              />
            </div>

            <div className="form-field">
              <label
                className={this.state.passwordActive ? "field-active" : ""}
              >
                Password
              </label>
              <input
                value={originalPassword}
                type="password"
                className="floating-label"
                onChange={event => this.updateOriginalPassword(event)}
                onFocus={() => this.activatePassword()}
                onBlur={event => this.disablePassword(event)}
              />
            </div>
          </div>

          <div className="btn-signup">
            <button className="btn btn-outline-primary btn-sign">Log In</button>
          </div>
        </form>
      </section>
    );
  }
}

export default Login;
