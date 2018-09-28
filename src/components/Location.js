import React from "react";
import { Link } from "react-router-dom";

import api from "../api.js";

class Location extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      truck_id: "",
      user_id: ""
    };
  }

  render() {
    const { currentUser } = this.props;

    {
      currentUser && console.log(this.props);
    }

    return (
      <section>
        <h2>Choose your location</h2>
        <form>
          <label>
            Truck 1<input type="radio" name="truck_id" value="truck1" checked />
          </label>

          <label>
            Truck 2<input type="radio" name="truck_id" value="truck2" />
          </label>

          <label>
            Truck 3<input type="radio" name="truck_id" value="truck3" />
          </label>

          <button>
            <Link to="/booking-date"> Next step</Link>
          </button>
        </form>
      </section>
    );
  }
}

export default Location;
