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
        <td>12:00 - 12:15</td>
        <td>12:20 - 12:35</td>
        <td>12:40 - 12:55</td>
      </tr>
      <tr>
        <td>13:00 - 13:15</td>
        <td>13:20 - 13:35</td>
        <td>13:40 - 13:55</td>
      </tr>
      <tr>
        <td>14:00 - 14:15</td>
        <td>14:20 - 14:35</td>
        <td>14:40 - 14:55</td>
      </tr>
      <tr>
        <td>15:00 - 15:15</td>
        <td>15:20 - 15:35</td>
        <td>15:40 - 15:55</td>
      </tr>
      <tr>
        <td>16:00 - 16:15</td>
        <td>16:20 - 16:35</td>
        <td>16:40 - 16:55</td>
      </tr>
      <tr>
        <td>17:00 - 17:15</td>
        <td>17:20 - 17:35</td>
        <td>17:40 - 17:55</td>
      </tr>
           
    </TableDragSelect>;
}

export default BookingTable;