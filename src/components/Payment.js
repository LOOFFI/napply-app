import React from "react";
import { Redirect } from "react-router-dom";

class Payment extends React.Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isSubmitSuccess: false,
  //   };
  // }

  handleSubmit (event) {
    
    return <Redirect to={"/validate/:bookingId"} />
  }


  render () {


  return (
    <section>
      <h2>Payment</h2>
      <img src="https://blocnotes.iergo.fr/wp-content/uploads/2012/02/paiement-647x300.jpg" alt="payment"/>
      <button onClick={event => this.handleSubmit(event)}>Pay Now</button>
    </section>
  );
}
}

export default Payment;
