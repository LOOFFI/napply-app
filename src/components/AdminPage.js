import React from "react";
import api from "../api"

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingArray: []
    };
  }

  componentDidMount() {
   
    api.get(`/booking/`)
    .then(response => {
      this.setState({ bookingArray: response.data })})
    .catch(err => console.log("error", err));
  }


  
  
  render () {
  const { currentUser } = this.props;  
  const {bookingArray} = this.state;
  
  return (  

  <div>
    <h1 align="center">BOOKINGS</h1>
    {bookingArray.map(oneBooking => (
      <ul key={oneBooking._id} >
        <li>user : {oneBooking.user_id}
        ......./....... {oneBooking.date.slice(8, 10)}-{oneBooking.date.slice(5, 7)}-{oneBooking.date.slice(0, 4)}
        ......./.......{oneBooking.date.slice(11, 16)}
        ......./.......{oneBooking.truck_id.slice(0,oneBooking.truck_id.indexOf(","))}
        ......./.......{oneBooking.sound}
        ......./.......{oneBooking.plaid}
        ......./.......{oneBooking.energyShot}
        </li>
      </ul>
    ))}
  </div>

  );
}
}

export default AdminPage;
