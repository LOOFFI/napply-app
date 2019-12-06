import React from "react";
import { Redirect } from 'react-router-dom'

class Recap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cancel: false
    };
  }

  

  handleSubmit(event) {
    this.props.handleBookingSubmit(event);
  }

  handleBack() {
    this.props.backToOptions()
  }

  handleCancel() {
    this.setState({
      cancel: true
    })
  }

  render() {
    const { cancel } = this.state;
    const { energyShot, energyShotPrice, date, plaid, sound, truck_id, slot } = this.props;
    let napPrice = 8;
    let totalPrice = napPrice;
    totalPrice += energyShotPrice;

    if (cancel) {
      return (
        <Redirect push from={'/booking'} to={'/'}/>
      )
    }

    return (
      <section className="payment-sec">
        <h2 align="center">Your Recap Order</h2>

        <div className="payment-section">
          

          <div className="prices card">
            <div className="card-header bg-transparent">
              <h3>YOUR ORDER</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                {truck_id.slice(0, truck_id.indexOf(","))}
              </p>
              <p className="card-text">
                {/* LE {date.slice(8, 10)}-{date.slice(5, 7)}-{date.slice(0, 4)} */}
                Le {date.getDate()}-{date.getMonth()+1}-{date.getFullYear()}
              </p>
              <p className="card-text">A {slot}</p>
              {plaid !== "None" && <p className="card-text">PLAID : {plaid}</p>}
              {sound !== "None" && <p className="card-text">SOUND : {sound}</p>}
              <p className="card-text">NAP: {napPrice}€</p>
              <p className="card-text">
                     <span className="card-text">
                      {`${energyShot.toUpperCase()} energy juice`}: {energyShotPrice}€
                     </span>
              </p>
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
          className="btn btn-outline-primary btn-sign m-1"
          onClick={event => this.handleBack(event)}
        >
          Previous
        </button>
        <button
          className="btn btn-outline-primary btn-sign m-1"
          onClick={event => this.handleSubmit(event)}
        >
          Validate Your Order
        </button>
        <button
          className="btn btn-outline-danger btn-sign m-1"
          onClick={event => this.handleCancel(event)}
        >
          Cancel Your Order
        </button>
      </section>
    );
  }
}

export default Recap;
