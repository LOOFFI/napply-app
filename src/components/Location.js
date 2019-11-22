import React from "react";
import { Redirect } from "react-router-dom";

import api from "../api.js";

class Location extends React.Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTruck = this.updateTruck.bind(this);
    this.state = {
      truck_id: "La Défense - Parvis, 76 Rue de la Demi Lune - 92800 Puteaux",
      user_id: "",
      isSubmitSuccess: false,
      bookingId: ""
    };
  }

  // handleSubmit(event) {
  //   event.preventDefault();

  //   const { _id } = this.props.currentUser;
  //   this.props.onSubmit({ user_id: _id }, () => {
  //     api.post("/location", this.state)
  //       .then(response => {
  //         this.setState({
  //           isSubmitSuccess: true,
  //           bookingId: response.data._id
  //         });
  //       })
  //       .catch(err => {
  //         console.log(err);
  //         alert("Sorry! Something went wrong.");
  //       });
  //   });
  // }

  updateTruck(e) {    
    this.props.onSubmit(e.target.value);
  }

  render() {
    
    const { isSubmitSuccess } = this.state;
    const truck_id = this.props.bookingId;
    console.log(this.props)
    

    // if (isSubmitSuccess) {
    //   return <Redirect push from={'/location'} to={`/booking-date/${bookingId}`} />;
    // }

    return (
      <section className="loc-section">
        <h2>Pick A Location</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="locations">
            <div className="card card-loc">
              <img
                className="card-img-top img-loc"
                src="../../images/la-defense-paris.jpg"
                alt="Card cap"
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
                    value="La Défense - Parvis, 76 Rue de la Demi Lune - 92800 Puteaux"
                    onChange={event => this.updateTruck(event)}
                    checked={
                      this.props.truck_id ===
                      "La Défense - Parvis, 76 Rue de la Demi Lune - 92800 Puteaux"
                    }
                  />
                </label>
              </div>
            </div>

            <div className="card card-loc">
              <img
                className="card-img-top img-loc"
                src="../../images/montmartre.jpeg"
                alt="Card cap"
              />
              <div className="card-body">
                <label>
                  <h3>Paris - Montmartre</h3>
                  <p>34 Rue Des Cloys</p>
                  <p>75018 Paris</p>
                  <p>
                    <i className="fas fa-phone fa-flip-horizontal" />
                    01.35.66.21.90
                  </p>
                  <input
                    type="radio"
                    name="truck_id"
                    value="Paris - Montmartre, 34 Rue Des Cloys - 75018 Paris"
                    onChange={e => this.updateTruck(e)}
                    checked={
                      this.props.truck_id ===
                      "Paris - Montmartre, 34 Rue Des Cloys - 75018 Paris"
                    }
                  />
                </label>
              </div>
            </div>

            <div className="card card-loc">
              <img
                className="card-img-top img-loc"
                src="../../images/paris1.jpeg"
                alt="Card cap"
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
                    value="Paris - Rivoli, Allée de Castiglione - 75001 Paris"
                    onChange={event => this.updateTruck(event)}
                    checked={
                      this.props.truck_id ===
                      "Paris - Rivoli, Allée de Castiglione - 75001 Paris"
                    }
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
