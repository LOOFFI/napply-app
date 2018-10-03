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
        <p>
          {energyShot}: {energyShotPrice}€
        </p>
      );
    }

    return (
      <section className="payment-sec">
        <h2 align="center">Payment</h2>
        <img
          className="payment-img"
          src="../../images/napply-payment.png"
          alt="payment"
        />

        <div className="prices">
          <h3>Receipt</h3>
          <p>Nap: {napPrice}€</p>
          {energyShotLine}
          <p>Total Price: {totalPrice}€</p>
        </div>

        <button
          className="btn btn-outline-primary btn-sign"
          onClick={event => this.handleSubmit(event)}
        >
          Pay Now
        </button>
      </section>
    );
  }
}

export default Payment;
