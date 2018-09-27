import React from "react";

import api from "../api";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      originalPassword: "",
      company: "",
      birthday: "",
      phoneNumber: ""
    };
  }

  updateName(event) {
    const { value } = event.target;
    this.setState({ fullName: value });
  }

  updateEmail(event) {
    const { value } = event.target;
    this.setState({ email: value });
  }

  updatePass(event) {
    const { value } = event.target;
    this.setState({ originalPassword: value });
  }

  updateBirthday(event) {
    const { value } = event.target;
    this.setState({ birthday: value });
  }

  updateCompany(event) {
    const { value } = event.target;
    this.setState({ company: value });
  }

  updatePhone(event) {
    const { value } = event.target;
    this.setState({ phoneNumber: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    api
      .post("/signup", this.state)
      .then(response => {
        console.log("Sign up 👍", response.data);
        const { onSignUp } = this.props;
        onSignUp(response.data.userDoc);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! There was a problem. 💩");
      });
  }

  render() {
    const { currentUser } = this.props;
    const {
      fullName,
      email,
      originalPassword,
      company,
      birthday,
      phoneNumber
    } = this.state;

    if (currentUser) {
      return (
        <section>
          <h2>You are signed up!</h2>
          <p>
            Welcome, {currentUser.fullName}. Your user ID is{" "}
            <b>{currentUser._id}</b>.
          </p>
        </section>
      );
    }

    return (
      <section className="signup-form">
        <h2>Sign Up</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group">
            <label for="fullName">
              Full Name:
              <input
                value={fullName}
                type="text"
                className="form-control"
                placeholder="Your Name"
                onChange={event => this.updateName(event)}
              />
            </label>

            <label for="email">
              Email:
              <input
                value={email}
                type="email"
                className="form-control"
                placeholder="myemail@mail.com"
                onChange={event => this.updateEmail(event)}
              />
            </label>

            <label for="password">
              Password:
              <input
                value={originalPassword}
                type="password"
                className="form-control"
                placeholder="Your Password"
                onChange={event => this.updatePass(event)}
              />
            </label>

            <label for="company">
              Company:
              <input
                value={company}
                type="text"
                className="form-control"
                placeholder="Your Company Name"
                onChange={event => this.updateCompany(event)}
              />
            </label>

            <label for="birthday">
              Birthday:
              <input
                value={birthday}
                type="date"
                className="form-control"
                placeholder="Your birth date"
                onChange={event => this.updateBirthday(event)}
              />
            </label>

            <label for="number">
              Phone number:
              <input
                value={phoneNumber}
                type="number"
                className="form-control"
                placeholder="Your phone number"
                onChange={event => this.updatePhone(event)}
              />
            </label>
          </div>
          <button className="btn btn-outline-primary btn-sign">Sign Up</button>
        </form>
      </section>
    );
  }
}

export default SignUp;
