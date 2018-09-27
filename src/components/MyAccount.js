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
    console.log(params);

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

  render() {
    const {
      _id,
      fullName,
      email,
      originalPassword,
      company,
      birthday,
      phoneNumber
    } = this.state;

    return (
      <section>
        <h2>Your account</h2>

        <h3>Your name: {fullName}</h3>
        <p>Your email: {email}</p>
        <p>Your password: {originalPassword}</p>
        <p>Your company: {company}</p>
        <p>Your birthday: {birthday}</p>
        <p>
          Your Phone number: +33
          {phoneNumber}
        </p>
      </section>
    );
  }
}

export default MyAccount;
