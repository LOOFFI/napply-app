import React from "react";
import DayPicker from "react-day-picker";
import { Redirect } from "react-router-dom";
import "react-day-picker/lib/style.css";
import BookingTable from "./BookingTable";
import api from "../api";
import "../App.css";

class DateAndTime extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
      slot: "",
      isSubmitSuccess: false
    };
  }

  handleDayClick(day) {
    this.setState(
      {
        selectedDay: day
      },
      () => {
        api
          .post("/booking-date", this.state)
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.log(err);
            alert("something !!!!!!! wrong");
          });
      }
    );
  }

  updateSlot(event) {
    console.log("date and time event", event.target.id);
    const { id } = event.target;
    this.setState({ slot: id });
  }

  handleSubmit(event) {
    api
      .post(`/booking-date/${this.props.match.params.bookingId}`, this.state)
      .then(response => {
        console.log(response);
        this.setState({ isSubmitSuccess: true });
      })
      .catch(err => {
        console.log("ERRORRRRRRRRRRRRR", err);
      });
  }

  render() {
    const past = {
      before: new Date()
    };

    const { isSubmitSuccess } = this.state;

    if (isSubmitSuccess) {
      return <Redirect to={`/options/${this.props.match.params.bookingId}`} />;
    }

    return (
      <section className="date-time">
        <h2 align="center">Pick A Date & Time Slot</h2>
        <div className="booking-date">
          <div className="day-picker">
            <DayPicker
              disabledDays={past}
              modifiers={{
                sunday: day => day.getDay() === 0 || day.getDay() === 6
              }}
              selectedDays={this.state.selectedDay}
              onDayClick={(day, info) => this.handleDayClick(day, info)}
            />
          </div>
          <BookingTable updateSlot={event => this.updateSlot(event)} />
        </div>
        <button
          className="btn btn-outline-primary btn-sign"
          onClick={event => this.handleSubmit(event)}
        >
          Next
        </button>
      </section>
    );
  }
}

export default DateAndTime;
