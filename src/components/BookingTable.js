import React from "react";
import TableDragSelect from "react-table-drag-select";
import "react-table-drag-select/style.css";
import "../App.css";
 
class BookingTable extends React.Component {
  state = {
    cells: [
      [false, false, false],
      [false, false, false],
      [false, false, false],
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ],
    userSelection: this.props.slot
  };

  isSelected(time) {
    if (!this.props.bookingArray) {
      return true;
    }

    return this.props.bookingArray.some(oneBooking =>
      time === oneBooking.date.slice(11, 16)
    );
  }

  clickSlot(event) {
    this.setState({ userSelection: event.target.id });
    this.props.updateSlot(event);
  }

 
  render () {

    const { userSelection } = this.state;

    return (

    <TableDragSelect
      value={this.state.cells}
      onChange={cells => this.setState({ cells })}
      
    >
    
      <tr>
        <td beingSelected={userSelection === "12:00"} selected={this.isSelected("12:00")} id="12:00" onClick={event => this.clickSlot(event)}>12:00 - 12:15</td>
        <td beingSelected={userSelection === "12:20"} selected={this.isSelected("12:20")} id="12:20" onClick={event => this.clickSlot(event)}>12:20 - 12:35</td>
        <td beingSelected={userSelection === "12:40"} selected={this.isSelected("12:40")} id="12:40" onClick={event => this.clickSlot(event)}>12:40 - 12:55</td>
      </tr>
      <tr>
        <td beingSelected={userSelection === "13:00"} selected={this.isSelected("13:00")} id="13:00" onClick={event => this.clickSlot(event)}>13:00 - 13:15</td>
        <td beingSelected={userSelection === "13:20"} selected={this.isSelected("13:20")} id="13:20" onClick={event => this.clickSlot(event)}>13:20 - 13:35</td>
        <td beingSelected={userSelection === "13:40"} selected={this.isSelected("13:40")} id="13:40" onClick={event => this.clickSlot(event)}>13:40 - 13:55</td>
      </tr>
      <tr>
        <td beingSelected={userSelection === "14:00"} selected={this.isSelected("14:00")} id="14:00" onClick={event => this.clickSlot(event)}>14:00 - 14:15</td>
        <td beingSelected={userSelection === "14:20"} selected={this.isSelected("14:20")} id="14:20" onClick={event => this.clickSlot(event)}>14:20 - 14:35</td>
        <td beingSelected={userSelection === "14:40"} selected={this.isSelected("14:40")} id="14:40" onClick={event => this.clickSlot(event)}>14:40 - 14:55</td>
      </tr>
      <tr>
        <td beingSelected={userSelection === "15:00"} selected={this.isSelected("15:00")} id="15:00" onClick={event => this.clickSlot(event)}>15:00 - 15:15</td>
        <td beingSelected={userSelection === "15:20"} selected={this.isSelected("15:20")} id="15:20" onClick={event => this.clickSlot(event)}>15:20 - 15:35</td>
        <td beingSelected={userSelection === "15:40"} selected={this.isSelected("15:40")} id="15:40" onClick={event => this.clickSlot(event)}>15:40 - 15:55</td>
      </tr>
      <tr>
        <td beingSelected={userSelection === "16:00"} selected={this.isSelected("16:00")} id="16:00" onClick={event => this.clickSlot(event)}>16:00 - 16:15</td>
        <td beingSelected={userSelection === "16:20"} selected={this.isSelected("16:20")} id="16:20" onClick={event => this.clickSlot(event)}>16:20 - 16:35</td>
        <td beingSelected={userSelection === "16:40"} selected={this.isSelected("16:40")} id="16:40" onClick={event => this.clickSlot(event)}>16:40 - 16:55</td>
      </tr>
      <tr>
        <td beingSelected={userSelection === "17:00"} selected={this.isSelected("17:00")} id="17:00" onClick={event => this.clickSlot(event)}>17:00 - 17:15</td>
        <td beingSelected={userSelection === "17:20"} selected={this.isSelected("17:20")} id="17:20" onClick={event => this.clickSlot(event)}>17:20 - 17:35</td>
        <td beingSelected={userSelection === "17:40"} selected={this.isSelected("17:40")} id="17:40" onClick={event => this.clickSlot(event)}>17:40 - 17:55</td>
      </tr>
           
    </TableDragSelect>
    )
    }
}

export default BookingTable;