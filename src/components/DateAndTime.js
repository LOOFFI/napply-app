import React from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

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
        <h2>Choose your date</h2>
        <DayPicker 
         selectedDays={this.state.selectedDay}
         onDayClick={this.handleDayClick}
       />
       <p>
          {this.state.selectedDay
            ? this.state.selectedDay.toLocaleDateString()
            : 'Please select a day 👻'}
        </p>
      
      </section>
    );

  }
  
}

export default DateAndTime;
