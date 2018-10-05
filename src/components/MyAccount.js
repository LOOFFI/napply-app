import React from "react";

import api from "../api.js";

import { Redirect } from "react-router-dom";

class MyAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      fullName: "",
      email: "",
      originalPassword: "",
      company: "",
      birthday: "",
      phoneNumber: "",
      fullNameActive: true,
      emailActive: true,
      passwordActive: true,
      companyActive: true,
      birthdayActive: true,
      numberActive: true,
      isSubmitSuccess: false
    };
  }

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

  componentDidMount() {
    const { params } = this.props.match;
    console.log(this.props);

    api
      .get(`/my-account/${params.userId}`)
      .then(response => {
        console.log("User details", response.data);
        this.setState(response.data);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! Something went wrong.");
      });
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
    const { params } = this.props.match;

    api
      .put(`/my-account/${params.userId}`, this.state)
      .then(response => {
        console.log("User PUT", response.data);
        const { editAccount } = this.props;
        editAccount(response.data);
        this.setState({ isSubmitSuccess: true });
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! Something went wrong.");
      });
  }

  render() {
    const {
      fullName,
      email,
      originalPassword,
      company,
      birthday,
      phoneNumber,
      isSubmitSuccess
    } = this.state;

    const myBirthday = birthday.slice(0, 10);
    const { currentUser } = this.props;

    if (!currentUser || isSubmitSuccess) {
      return <Redirect to="/" />;
    }

    return (
      <section className="signup-form">
        <h2>MY ACCOUNT</h2>

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
                placeholder="********"
                onChange={event => this.updateOriginalPassword(event)}
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
                Birthday:
              </label>
              <input
                value={myBirthday}
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
                Phone number
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
          <button className="btn btn-outline-primary btn-sign">Save</button>
        </form>
      </section>
    );
  }
}

export default MyAccount;
