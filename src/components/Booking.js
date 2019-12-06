import React from 'react';
import { Redirect } from 'react-router-dom';
import api from "../api";
import Location from './Location';
import DateAndTime from './DateAndTime';
import Options from './Options';
import Recap from './Recap';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { 
      bookingId: null,
      truck_id: "La Défense - Parvis, 76 Rue de la Demi Lune - 92800 Puteaux",
      user_id: this.props.currentUser._id,
      selectedDay: null,
      slot: "",
      sound: "None",
      plaid: "None",
      energyShot: "none",
      energyShotPrice: null,
      bookingArray: null,
      recap: false,
      isSubmitSuccess: false,
      next: false
     }
  }


  backToLocation() {
    const { next } = this.state;
    console.log('next', next)
    this.setState({
      selectedDay: null,
      next: !next,
      slot: '',
      bookingArray: null
    })
  }

  backToDateAndTime() {
    const {next} = this.state;
    this.setState({
      next: !next
    })
  }

  backToOptions() {
    const {next} = this.state;
    this.setState({
      next: !next
    })
  }

  handleBookingSubmit(e) {
    e.preventDefault();
    
    api .post("/location", this.state)
        .then(response => {
          this.setState({
            bookingId: response.data._id,
            isSubmitSuccess: true
          });
        })
        .catch(err => {
          console.log(err);
          alert("Sorry! Something went wrong.");
        });   
  }

  handleDayClick(day) {
    this.setState({
      selectedDay: day
    },
    () => {
    api .post("/booking-date", this.state)
        .then(response => {
          console.log('response.data',response.data);
          this.setState({ bookingArray: response.data });
        })
        .catch(err => {
          console.log(err);
          alert("something !!!!!!! wrong");
        });
    });
  }
  
  handleChange(e) {
    this.setState({
      truck_id: e
    })
  }

  handleSubmit(e) {
    const { next } = this.state
    this.setState({
      next: !next,
      user_id: e
    })
  }

  updateSlot(e) {
    this.setState({
      slot: e
    })
  }

  updateSound(e) {
    this.setState({
      sound : e
    })
  }

  updatePlaid(e) {
    this.setState({
      plaid : e
    })
  }

  updateEnergyShot(e) {
    if (e==="White Paradise") {
      this.setState({
        energyShot : e,
        energyShotPrice : 6
      })
    }
    if (e==="none") {
      this.setState({
        energyShot: e
      })
    }
    if (e!=="none"&&e!=="White Paradise") {
      this.setState({
        energyShot : e,
        energyShotPrice : 5
      })
    }
  }
  
  recap() {
    const { recap } = this.state;
    this.setState({
      recap: !recap
    })
  }

  next() {
    const { next } = this.state
    this.setState({
      next: !next
    })
  }

  

   
  render() { 
    // console.log('this.props', this.props.currentUser._id)
    // console.log(this.state)
    const { currentUser } = this.props;
    const { bookingId, truck_id, next, selectedDay, sound, plaid, energyShot, energyShotPrice, slot, bookingArray, recap, isSubmitSuccess } = this.state;
    

    if (isSubmitSuccess) {
      return (
        <Redirect push from={"/booking"} to={`/payment/:${bookingId}`} />
      )
    }
    if ((!next&&selectedDay===null)&&(slot===""&&!next)) {
      return <Location 
          currentUser={currentUser} 
          onSubmit={(e) => this.handleChange(e)} 
          handleSubmit={(e) => this.handleSubmit(e)} 
          next={() => this.next() }
          truck_id={truck_id}/>
    }
    if (next&&!recap) {
      return (
      <DateAndTime 
          handleDayClick={(day) => this.handleDayClick(day)} 
          selectedDay={selectedDay} 
          slot={slot}
          updateSlot={e => this.updateSlot(e)}
          next={() => this.next() }
          backToLocation={() => this.backToLocation()}
          bookingArray={bookingArray}
        />
      )
    }
    if (!next&&truck_id!==null) {
      return ( 
        <Options
          updateSound={(e) => this.updateSound(e) }
          updatePlaid={(e) => this.updatePlaid(e)}
          updateEnergyShot={(e) => this.updateEnergyShot(e)}
          sound={sound}
          plaid={plaid}
          energyShot={energyShot}
          next={() => this.next()}
          recap={() => this.recap()}
          backToDateAndTime={() => this.backToDateAndTime()}
        />            
      );
    
    }
    if (next&&recap) {
      return (
        <Recap
          handleBookingSubmit={(e) => this.handleBookingSubmit(e)}
          backToOptions={() => this.backToOptions()}
          energyShot={energyShot}
          energyShotPrice={energyShotPrice}
          date={selectedDay}
          slot={slot}
          sound={sound}
          plaid={plaid}
          truck_id={truck_id}
        />
      )
    }
  }
}
 
export default Booking;