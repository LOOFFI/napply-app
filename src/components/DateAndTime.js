import React from "react";
import DayPicker from "react-day-picker";
import { Redirect } from "react-router-dom";
import "react-day-picker/lib/style.css";
import BookingTable from "./BookingTable";
import "../App.css";

class DateAndTime extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      
      back: false
    };
  }

  handleDayClick(day) {
    this.props.handleDayClick(day)
  }

  // handleDayClick(day) {
  //   this.setState(
  //     {
  //       selectedDay: day
  //     },
  //     () => {
  //       api
  //         .post("/booking-date", this.state)
  //         .then(response => {
  //           // console.log(response.data);
  //           this.setState({ bookingArray: response.data });
  //         })
  //         .catch(err => {
  //           console.log(err);
  //           alert("something !!!!!!! wrong");
  //         });
  //     }
  //   );
  // }

  updateSlot(event) {
      this.props.updateSlot(event.target.id)
  }

  //requete pour mettre a jour et valider le creneau de booking
  // handleSubmit(event) {
  //   api
  //     .post(`/booking-date/${this.props.match.params.bookingId}`, this.state)
  //     .then(response => {
  //       // console.log("RESPONSE",response);
  //       this.setState({ isSubmitSuccess: true });
  //     })
  //     .catch(err => {
  //       console.log("ERROR", err);
  //     });
  // }

  handleSubmit() {
    this.props.next()
  }

  backSubmit() {
    this.setState({ back: true })
  }
  

  render() {
    const past = {
      before: new Date()
    };

    const { isSubmitSuccess, bookingArray, back } = this.state;

    return (
      <section className="date-time">
        <h2 align="center">Pick A Date & Time Slot</h2>
        <div className="booking-date2">
          <div className="day-picker">
            <DayPicker
              disabledDays={past}
              modifiers={{
                sunday: day => day.getDay() === 0 || day.getDay() === 6
              }}
              selectedDays={this.props.selectedDay}
              onDayClick={(day, info) => this.handleDayClick(day, info)}
            />
          </div>
          <BookingTable
            bookingArray={bookingArray}
            updateSlot={event => this.updateSlot(event)}
          />
        </div>
        <button
          className="btn btn-outline-primary btn-sign m-1"
          onClick={() => this.backSubmit()}
        >
          Previous
        </button>
        <button
          className="btn btn-outline-primary btn-sign m-1"
          onClick={event => this.handleSubmit(event)}
        >
          Next
        </button>
      </section>
    );
  }
}

export default DateAndTime;
