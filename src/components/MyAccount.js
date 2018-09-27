import React from "react";

import api from "../api.js";

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
      phoneNumber: ""
    };
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
        alert("Sorry! Something went wrong. 💩");
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
        editAccount(response.data.userDoc);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! Something went wrong. 💩");
      });
  }

  render() {
    const {
      fullName,
      email,
      originalPassword,
      company,
      birthday,
      phoneNumber
    } = this.state;

    const myBirthday = birthday.slice(0, 10);

    return (
      <section>
        <h2>Your account</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <label for="fullName">
            Full Name:
            <input
              value={fullName}
              type="text"
              placeholder="Your Name"
              onChange={event => this.updateName(event)}
            />
          </label>

          <label for="email">
            Email:
            <input
              value={email}
              type="email"
              placeholder="myemail@mail.com"
              onChange={event => this.updateEmail(event)}
            />
          </label>

          <label for="password">
            Password:
            <input
              value={originalPassword}
              type="password"
              placeholder="*******"
              onChange={event => this.updatePass(event)}
            />
          </label>

          <label for="company">
            Company:
            <input
              value={company}
              type="text"
              placeholder="Your Company Name"
              onChange={event => this.updateCompany(event)}
            />
          </label>

          <label for="birthday">
            Birthday:
            <input
              value={myBirthday}
              type="date"
              placeholder="Your birth date"
              onChange={event => this.updateBirthday(event)}
            />
          </label>

          <label for="number">
            Phone number:
            <input
              value={phoneNumber}
              type="number"
              placeholder="Your phone number"
              onChange={event => this.updatePhone(event)}
            />
          </label>
          <button className="btn btn-outline-primary btn-sign">Save</button>
        </form>
      </section>
    );
  }
}

export default MyAccount;
