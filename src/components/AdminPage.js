import React from "react";
import api from "../api"

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingArray: []
    };
  }

  getBookings() {
    api.get(`/booking-date/`)
    .then(response => {
      console.log("RESPONSE DATA",response.data)
      this.setState({ bookingArray: response.data })})
    .catch(err => console.log("error", err));
  }
  
  
  render () {
  const { currentUser } = this.props;
  console.log("CURRENTUSER", currentUser)
  his.getBookings()

  return (  <h2>Admin Page</h2>);
}
}

export default AdminPage;
