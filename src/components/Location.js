import React from "react";
import { Link } from "react-router-dom";

import api from "../api.js";

class Location extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h2>Choose your location</h2>
        <form>
          <label>Truck 1</label>
          <input type="radio" />

          <label>Truck 2</label>
          <input type="radio" />

          <label>Truck 3</label>
          <input type="radio" />

          <button>
            <Link to="/booking-date"> Next step</Link>
          </button>
        </form>
      </section>
    );
  }
}

export default Location;
