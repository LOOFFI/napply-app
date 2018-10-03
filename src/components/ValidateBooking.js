import React from "react";
import { Redirect } from "react-router-dom";
import api from "../api";


class ValidateBooking extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      date:"",
      energyShot:"",
      plaid:"",
      sound:"",
      isSubmitSuccess: false,
     };
  }

  componentDidMount() {
    const {params} = this.props.match;
    console.log("params",params.bookingId)

    api.get(`/booking-date/${params.bookingId }`)
    .then(response => {
      console.log("booking details",response.data)
      this.setState({
        date: response.data.date,
        energyShot: response.data.energyShot,
        plaid: response.data.plaid,
        sound: response.data.sound,
      })
    })
    .catch(err => {
      console.log(err);
      alert("sorry something wrong");
  })
  }

  handleSubmit (event) {
    this.setState({isSubmitSuccess:true})
  }
    
  
  render () {
  
    const {date,energyShot,plaid,sound,isSubmitSuccess} = this.state;
    const dateForm = date.slice(0,10);
    const slotTime = date.slice(11,16);

    
    if (isSubmitSuccess) {
      
      return <Redirect to="/" />
    }
     
  return (
    <section>
      <h2>Your Booking is validate! Thank you!</h2>
      <p>Vous avez reservé une Nap le</p>
      <p>{dateForm}</p>
      <p>à</p>
      <p>{slotTime}h</p>
      <p>Vos options sont les suivantes :</p>
      <p>EnergyShot :{this.state.energyShot}</p>
      <p>Plaid :{this.state.plaid}</p>
      <p>Sound :{this.state.sound}</p>
      <button onClick={event => this.handleSubmit(event)}>Back to homepage</button>
    </section>
  );
}
}

export default ValidateBooking;
