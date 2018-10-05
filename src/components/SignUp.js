import React from "react";
import { Redirect } from "react-router-dom";

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
      phoneNumber: "",
      fullNameActive: false,
      emailActive: false,
      passwordActive: false,
      companyActive: false,
      birthdayActive: false,
      numberActive: false
    };
  }

  // to activate the input field while typing
  activateFullName() {
    this.setState({
      fullNameActive: true
    });
  }

  // to deactivate input only if it's empty
  disableFullName(event) {
    if (event.target.value === "") {
      this.setState({
        fullNameActive: false
      });
    }
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

  activateCompany() {
    this.setState({
      companyActive: true
    });
  }

  disableCompany(event) {
    if (event.target.value === "") {
      this.setState({
        companyActive: false
      });
    }
  }

  activateBirthday() {
    this.setState({
      birthdayActive: true
    });
  }

  disableBirthday(event) {
    if (event.target.value === "") {
      this.setState({
        birthdayActive: false
      });
    }
  }

  activateNumber() {
    this.setState({
      numberActive: true
    });
  }

  disableNumber(event) {
    if (event.target.value === "") {
      this.setState({
        numberActive: false
      });
    }
  }

  updateName(event) {
    const { value } = event.target;
    this.setState({ fullName: value });
  }

  updateEmail(event) {
    const { value } = event.target;
    this.setState({ email: value });
  }

  updatePassword(event) {
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
        alert("Sorry! There was a problem.");
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
      return <Redirect to="/" />;
    }

    return (
      <section className="signup-form">
        <h2>SIGN UP</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group">
            <div className="form-field">
              <label
                htmlFor="fullName"
                className={this.state.fullNameActive ? "field-active" : ""}
              >
                Full Name
              </label>
              <input
                value={fullName}
                type="text"
                className="floating-label"
                onChange={event => this.updateName(event)}
                onFocus={() => this.activateFullName()}
                onBlur={event => this.disableFullName(event)}
              />
            </div>

            <div className="form-field">
              <label
                htmlFor="email"
                className={this.state.emailActive ? "field-active" : ""}
              >
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
                htmlFor="password"
                className={this.state.passwordActive ? "field-active" : ""}
              >
                Password
              </label>
              <input
                value={originalPassword}
                type="password"
                className="floating-label"
                onChange={event => this.updatePassword(event)}
                onFocus={() => this.activatePassword()}
                onBlur={event => this.disablePassword(event)}
              />
            </div>

            <div className="form-field">
              <label
                htmlFor="company"
                className={this.state.companyActive ? "field-active" : ""}
              >
                Company
              </label>
              <input
                value={company}
                type="text"
                className="floating-label"
                onChange={event => this.updateCompany(event)}
                onFocus={() => this.activateCompany()}
                onBlur={event => this.disableCompany(event)}
              />
            </div>

            <div className="form-field">
              <label
                htmlFor="birthday"
                className={this.state.birthdayActive ? "field-active" : ""}
              >
                {/* Birthday */}
              </label>
              <input
                value={birthday}
                type="date"
                className="floating-label"
                onChange={event => this.updateBirthday(event)}
                onFocus={() => this.activateBirthday()}
                onBlur={event => this.disableBirthday(event)}
              />
            </div>

            <div className="form-field">
              <label
                htmlFor="number"
                className={this.state.numberActive ? "field-active" : ""}
              >
                Phone Number
              </label>
              <input
                value={phoneNumber}
                type="number"
                className="floating-label"
                onChange={event => this.updatePhone(event)}
                onFocus={() => this.activateNumber()}
                onBlur={event => this.disableNumber(event)}
              />
            </div>
          </div>
          <div className="btn-signup">
            <button className="btn btn-outline-primary btn-sign">
              Sign Up
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default SignUp;
