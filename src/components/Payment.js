import React from "react";
import { Redirect } from "react-router-dom";

class Payment extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isSubmitSuccess: false,
    };
  }

  handleSubmit (event) {
    this.setState({isSubmitSuccess:true})
  }
    


  render () {

    const { isSubmitSuccess } = this.state;

  if (isSubmitSuccess) {
      return <Redirect to={`/validate/${this.props.match.params.bookingId}`} />
  }
  

  return (
    <section>
      <h2 align="center">Payment</h2>
      <img align="center" src="https://blocnotes.iergo.fr/wp-content/uploads/2012/02/paiement-647x300.jpg" alt="payment"/>
      <button onClick={event => this.handleSubmit(event)}>Pay Now</button>
    </section>
  );
}
}

export default Payment;
