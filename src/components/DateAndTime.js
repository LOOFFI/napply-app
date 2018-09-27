import React from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import BookingTable from "./BookingTable";
import "../App.css";

class DateAndTime extends React.Component {

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
    };
  }
  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  render () {

    return (
      <section>
        <h2 align="center">Choose your date</h2>
      <div  className="booking-date">
        <div className="day-picker">  
          <DayPicker 
            selectedDays={this.state.selectedDay}
            onDayClick={this.handleDayClick}
          />
        </div>
         <BookingTable/>
      </div>
       
      </section>
    );

  }
  
}

export default DateAndTime;
