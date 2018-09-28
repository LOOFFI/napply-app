import React from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import BookingTable from "./BookingTable";
import api from "../api";
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

    // console.log("hiiiiiiiiiiiiiiii", day);
    // console.log(new Date());
    // api.post("/booking-date", day)
    //  .then(reponse => {
    //    console.log("day",day)
    //   })
    //  .catch(err => {
    //     console.log(err);
    //     alert("something wrong");
    //  })
  }

  render () {
    
    const past = { 
      before: new Date(),
    };
    
    
    return (
      <section>
        <h2 align="center">Choose your date</h2>
      <div  className="booking-date">
        <div className="day-picker">  
          <DayPicker 
            disabledDays={ past }
            modifiers={{
              sunday: day => (day.getDay() === 0 || day.getDay() === 6),
              
              firstOfMonth: day => day.getDate() === 1,
            }}
            selectedDays={this.state.selectedDay}
            onDayClick={(day, info) => this.handleDayClick(day, info)}
           
          />
        </div>
         <BookingTable/>
      </div>
       
      </section>
    );

  }
  
}

export default DateAndTime;
