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

        <h3>{fullName}</h3>
      </section>
    );
  }
}

export default MyAccount;
