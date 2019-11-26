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
      
    };
  }

  handleDayClick(day) {
    this.props.handleDayClick(day)
  }

  updateSlot(event) {
      this.props.updateSlot(event.target.id)
  }

  handleSubmit() {
    this.props.next()
  }

  handleBack() {
    this.props.backToLocation()
  }

  render() {
    const past = {
      before: new Date()
    };

    const { bookingArray, selectedDay, slot } = this.props;

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
              selectedDays={selectedDay}
              onDayClick={(day, info) => this.handleDayClick(day, info)}
            />
          </div>
          <BookingTable
            slot={slot}
            bookingArray={bookingArray}
            updateSlot={event => this.updateSlot(event)}
          />
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
          Next
        </button>
      </section>
    );
  }
}

export default DateAndTime;
