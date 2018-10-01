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
<<<<<<< HEAD
      <section>
        <h2>Choose your location</h2>
=======
      <section className="loc-section">
        <h2>Pick A Location</h2>
>>>>>>> 2f3e550b39a92ca2d99483f4092e3b5178c435d9
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="locations">
            <div className="card card-loc">
              <img
                className="card-img-top img-loc"
                src="../../images/la-defense-paris.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <label>
                  <h3>La Défense - Parvis</h3>
                  <p>76 Rue de la Demi Lune</p>
                  <p>92800 Puteaux</p>
                  <p>
                    <i className="fas fa-phone fa-flip-horizontal" />
                    01.34.65.88.75
                  </p>
                  <input
                    type="radio"
                    name="truck_id"
                    value="truck1"
                    onChange={event => this.updateTruck(event)}
                    checked={this.state.truck_id === "truck1"}
                  />
                </label>
              </div>
            </div>

<<<<<<< HEAD
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
=======
            <div className="card card-loc">
              <img
                className="card-img-top img-loc"
                src="../../images/montmartre.jpeg"
                alt="Card image cap"
              />
              <div className="card-body">
                <label>
                  <h3>Paris - Montmatre</h3>
                  <p>34 Rue Des Cloys</p>
                  <p>75018 Paris</p>
                  <p>
                    <i className="fas fa-phone fa-flip-horizontal" />
                    01.35.66.21.90
                  </p>
                  <input
                    type="radio"
                    name="truck_id"
                    value="truck2"
                    onChange={event => this.updateTruck(event)}
                    checked={this.state.truck_id === "truck2"}
                  />
                </label>
              </div>
            </div>
>>>>>>> 2f3e550b39a92ca2d99483f4092e3b5178c435d9

            <div className="card card-loc">
              <img
                className="card-img-top img-loc"
                src="../../images/paris1.jpeg"
                alt="Card image cap"
              />
              <div className="card-body">
                <label>
                  <h3>Paris - Rivoli</h3>
                  <p>Allée de Castiglione</p>
                  <p>75001 Paris</p>
                  <p>
                    <i className="fas fa-phone fa-flip-horizontal" />
                    01.53.20.40.46
                  </p>
                  <input
                    type="radio"
                    name="truck_id"
                    value="truck3"
                    onChange={event => this.updateTruck(event)}
                    checked={this.state.truck_id === "truck3"}
                  />
                </label>
              </div>
            </div>
          </div>
          <button className="btn btn-outline-primary btn-sign">
            Next step
          </button>
        </form>
      </section>
    );
  }
}

export default Location;
