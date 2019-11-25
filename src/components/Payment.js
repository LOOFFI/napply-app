import React from "react";
import api from "../api";
import { Redirect } from "react-router-dom";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitSuccess: false,
      energyShot: "",
      date: "",
      plaid: "",
      sound: "",
      truck_id: ""
    };
  }

  componentDidMount() {
    const { bookingId } = this.props.match.params;
    api .get(`/booking-date/${bookingId.slice(1, bookingId.length )}`)
        .then(response => {
          this.setState({
            energyShot: response.data.energyShot,
            // date: response.data.date,
            plaid: response.data.plaid,
            sound: response.data.sound,
            truck_id: response.data.truck_id
          });
          console.log("BRAVO", response.data.date);
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
    const {
      isSubmitSuccess,
      energyShot,
      date,
      plaid,
      sound,
      truck_id
    } = this.state;

    if (isSubmitSuccess) {
      return <Redirect to="/" />;
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
        <span className="card-text">
          {energyShot.toUpperCase()}: {energyShotPrice}€
        </span>
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
              <p className="card-text">
                {truck_id.slice(0, truck_id.indexOf(","))}
              </p>
              <p className="card-text">
                LE {date.slice(8, 10)}-{date.slice(5, 7)}-{date.slice(0, 4)}
              </p>
              <p className="card-text">A {date.slice(11, 16)} H</p>
              {plaid !== "None" && <p className="card-text">PLAID : {plaid}</p>}
              {sound !== "None" && <p className="card-text">SOUND : {sound}</p>}
              <p className="card-text">NAP: {napPrice}€</p>
              <p className="card-text">{energyShotLine}</p>
            </div>
            <div className="card-footer bg-transparent">
              <div className="card-total">
                <p className="order-total">ORDER TOTAL</p>
                <p className="card-text">{totalPrice}€</p>
              </div>
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
