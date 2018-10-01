import React from "react";
import TableDragSelect from "react-table-drag-select";
import "react-table-drag-select/style.css";
import "../App.css";
 
class BookingTable extends React.Component {
  state = {
    cells: [
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false]
    ]
  };
 
  render = () =>
    <TableDragSelect
      value={this.state.cells}
      onChange={cells => this.setState({ cells })}
    >
      <tr>
        <td id="12:00" onClick={(event)=> this.props.updateSlot(event)}>12:00 - 12:15</td>
        <td id="12:20" onClick={event => this.props.updateSlot(event)}>12:20 - 12:35</td>
        <td id="12:40" onClick={event => this.props.updateSlot(event)}>12:40 - 12:55</td>
      </tr>
      <tr>
        <td id="13:00" onClick={event => this.props.updateSlot(event)}>13:00 - 13:15</td>
        <td id="13:20" onClick={event => this.props.updateSlot(event)}>13:20 - 13:35</td>
        <td id="13:40" onClick={event => this.props.updateSlot(event)}>13:40 - 13:55</td>
      </tr>
      <tr>
        <td id="14:00" onClick={event => this.props.updateSlot(event)}>14:00 - 14:15</td>
        <td id="14:20" onClick={event => this.props.updateSlot(event)}>14:20 - 14:35</td>
        <td id="14:40" onClick={event => this.props.updateSlot(event)}>14:40 - 14:55</td>
      </tr>
      <tr>
        <td id="15:00" onClick={event => this.props.updateSlot(event)}>15:00 - 15:15</td>
        <td id="15:20" onClick={event => this.props.updateSlot(event)}>15:20 - 15:35</td>
        <td id="15:40" onClick={event => this.props.updateSlot(event)}>15:40 - 15:55</td>
      </tr>
      <tr>
        <td id="16:00" onClick={event => this.props.updateSlot(event)}>16:00 - 16:15</td>
        <td id="16:20" onClick={event => this.props.updateSlot(event)}>16:20 - 16:35</td>
        <td id="16:40" onClick={event => this.props.updateSlot(event)}>16:40 - 16:55</td>
      </tr>
      <tr>
        <td id="17:00" onClick={event => this.props.updateSlot(event)}>17:00 - 17:15</td>
        <td id="17:20" onClick={event => this.props.updateSlot(event)}>17:20 - 17:35</td>
        <td id="17:40" onClick={event => this.props.updateSlot(event)}>17:40 - 17:55</td>
      </tr>
           
    </TableDragSelect>;
}

export default BookingTable;