import React from "react";
import api from "../api";
import { Redirect } from "react-router-dom";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitSuccess: false,
      energyShot: ""
    };
  }

  componentDidMount() {
    api
      .get(`/booking/${this.props.match.params.bookingId}`)
      .then(response => {
        this.setState({ energyShot: response.data.energyShot });
        console.log("BRAVO", response);
      })
      .catch(err => {
        console.log("pas bravo", err);
        alert("azertyh");
      });
  }

  handleSubmit(event) {
    this.setState({ isSubmitSuccess: true });
  }

  render() {
    const { isSubmitSuccess, energyShot } = this.state;

    if (isSubmitSuccess) {
      return <Redirect to={`/validate/${this.props.match.params.bookingId}`} />;
    }

    let energyShotPrice;
    let energyShotLine;
    let napPrice = 8;
    let totalPrice = napPrice;

    if (energyShot !== "none") {
      if (energyShot === "Super Green" || energyShot === "Veggie Detox") {
        energyShotPrice = 5;
        totalPrice += energyShotPrice;
      } else {
        energyShotPrice = 6;
        totalPrice += energyShotPrice;
      }
      energyShotLine = (
        <p className="card-text">
          {energyShot.toUpperCase()}: {energyShotPrice}€
        </p>
      );
    }

    return (
      <section className="payment-sec">
        <h2 align="center">Payment</h2>

        <div className="payment-section">
          <div className="payment-pic">
            <img
              className="payment-img"
              src="../../images/napply-payment.png"
              alt="payment"
            />
          </div>

          <div className="prices card">
            <div className="card-header bg-transparent">
              <h3>YOUR ORDER</h3>
            </div>
            <div className="card-body">
              <p className="card-text">NAP: {napPrice}€</p>
              <p className="card-text">{energyShotLine}</p>
            </div>
            <div className="card-footer bg-transparent">
              <p className="card-total">
                <p className="order-total">ORDER TOTAL</p>
                <p className="card-text">{totalPrice}€</p>
              </p>
            </div>
          </div>
        </div>

        <button
          className="btn btn-outline-primary btn-sign"
          onClick={event => this.handleSubmit(event)}
        >
          Buy Now
        </button>
      </section>
    );
  }
}

export default Payment;
