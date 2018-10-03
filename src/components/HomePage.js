import React from "react";
import { NavLink, Link } from "react-router-dom";
import api from "../api";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingArray: []
    };
  }

  componentDidMount() {
    if (this.props.currentUser) {
      console.log("this.props", this.props.currentUser._id);
      api
        .get(`/booking-date/`)
        .then(response => this.setState({ bookingArray: response.data }))
        .catch(err => console.log("error", err));
    }
    
  }

  render() {
    const { currentUser } = this.props;
    const { bookingArray } = this.state;

    return (
      <section classname="home-back">
        <div className="welcome-hp">
          {!currentUser && (
            <div className="welcome-hp">
              <h2>Welcome to Napply</h2>

              <NavLink to="/signup">
                <button className="btn btn-outline-primary">
                  Sign up and book your first nap!
                </button>
              </NavLink>
            </div>
          )}

          {currentUser && (
            <div>
              <section classname="home-back">
                <div className="hp-btn">
                  <h2>
                    Welcome back, <b>{currentUser.fullName}!</b>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Link to="/location">
                    <button className="btn btn-outline-primary">
                      Book A Nap
                    </button>
                  </Link>
                </div>
              </section>

              <section>
                <h3>Your Bookings</h3>

                <div className="card hp-card">
                  {bookingArray.map(oneBooking => (
                    <div className="card-body" key={oneBooking._id}>
                      <h5 className="card-title">{oneBooking.truck_id}</h5>
                      <h6
                        className="card-subtitle mb-2 text-muted"
                        align="center"
                      >
                        {oneBooking.date.slice(8, 10)}-
                        {oneBooking.date.slice(5, 7)}-
                        {oneBooking.date.slice(0, 4)} /
                        {oneBooking.date.slice(11, 16)}
                      </h6>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <i className="fas fa-check" />
                          Sound: <b>{oneBooking.sound}</b>
                        </li>
                        <li className="list-group-item">
                          <i className="fas fa-check" />
                          Plaid: <b>{oneBooking.plaid}</b>
                        </li>
                        <li className="list-group-item">
                          <i className="fas fa-check" />
                          Energy Shot: <b>{oneBooking.energyShot}</b>
                        </li>
                      </ul>
                      {/* <a href="#" className="card-link">
                  Show Details
                </a> */}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>

        <div className="concept">
          <h4>Concept</h4>

          <div className="concept-cards">
            <div className="card concept-card">
              <h5>
                <i className="fas fa-compass" />
                Pick the most convenient location for you
              </h5>
              <div className="card-body">
                <p className="card-text">
                  We made sure to spread through the capital. Browse through our
                  different locations and find the most convenient one for you.
                </p>
              </div>
            </div>
            <div className="card concept-card">
              <h5>
                <i className="fas fa-bed" />
                Come on the date, just relax
              </h5>
              <div className="card-body">
                <p className="card-text">
                  Once you've booked your nap (3 minutes tops!), the only thing
                  you've got to do and come on the date, lay down and relax.
                </p>
              </div>
            </div>
            <div className="card concept-card">
              <h5>
                <i className="fas fa-bolt" />
                You're good to go back to work!
              </h5>
              <div className="card-body">
                <p className="card-text">
                  15 minutes later, you are all ready to go and make the most of
                  your day!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="nap-benefits">
          <div className="benefits-img">
            <img src="../../images/rest-illustration.jpg" />
          </div>
          <div className="benefits-info">
            <h4>Napply will help you be at your very best</h4>
            <h5>
              Napping at work sounds pretty risky, but it does give you the
              chance to take a little time, get back in the zone and recharge
              your batteries.
            </h5>
            <p>Taking some time to nap and rest will bring you:</p>
            <ul>
              <li>
                Improvement of your productivity: attention, concentration,
                energy, performance, mood.
              </li>
              <li>
                Help your mental health. You need to be in the right mental
                state to conduct your job properly, so in order to try and
                regain a little control, it’s worth turning to the land of nod
                to get some well-earned rest.
              </li>
              <li>
                An great regulation in terms of cardiovascular protection,
                reducing the risk and frequency of illness, as well as driving
                down cortisol levels and inflammation. By taking a nap at least
                3 times a week workers have been shown to reduce their risk of
                coronary disease by 50%.
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default HomePage;
