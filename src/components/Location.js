import React from "react";
import { Redirect } from "react-router-dom";

import api from "../api.js";

class Location extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      truck_id: "truck1",
      user_id: "",
      isSubmitSuccess: false,
      bookingId: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    const { _id } = this.props.currentUser;
    this.setState({ user_id: _id }, () => {
      console.log(this.state);
      api
        .post("/location", this.state)
        .then(response => {
          this.setState({
            isSubmitSuccess: true,
            bookingId: response.data._id
          });
        })
        .catch(err => {
          console.log(err);
          alert("Sorry! Something went wrong. 💩");
        });
    });
  }

  updateTruck(event) {
    const { value } = event.target;
    this.setState({ truck_id: value });
  }

  render() {
    const { currentUser } = this.props;
    const { isSubmitSuccess, bookingId } = this.state;

    if (isSubmitSuccess) {
      return <Redirect to={`/booking-date/${bookingId}`} />;
    }

    return (
      <section>
        <h2>Choose your location</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Truck 1
            <input
              type="radio"
              name="truck_id"
              value="truck1"
              onChange={event => this.updateTruck(event)}
              checked={this.state.truck_id === "truck1"}
            />
          </label>

          <label>
            Truck 2
            <input
              type="radio"
              name="truck_id"
              value="truck2"
              onChange={event => this.updateTruck(event)}
              checked={this.state.truck_id === "truck2"}
            />
          </label>

          <label>
            Truck 3
            <input
              type="radio"
              name="truck_id"
              value="truck3"
              onChange={event => this.updateTruck(event)}
              checked={this.state.truck_id === "truck3"}
            />
          </label>

          <button>Next step</button>
        </form>
      </section>
    );
  }
}

export default Location;
