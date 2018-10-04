import React from "react";
import { NavLink, Link } from "react-router-dom";
import api from "../api";
let imgUrl = "../../images/energy-pod-back.png";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingArray: []
    };
  }

  componentDidMount() {
    console.log("current user CDMount", this.props.currentUser);
    this.getBookings();
  }

  componentDidUpdate(prevProps) {
    console.log("current user CDU", this.props.currentUser);
    if (!prevProps.currentUser) {
      this.getBookings();
    }
  }

  getBookings() {
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
    console.log(bookingArray.map(b => ({ date: b.date, _id: b._id })));
    return (
      <section>
        <div className="welcome-hp">
          {!currentUser && (
            <div
              className="welcome-hp"
              style={{
                backgroundImage: "url(" + imgUrl + ")",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                height: "900px"
              }}
            >
              <div className="hp-btn">
                <h2>Welcome to Napply</h2>

                <NavLink to="/signup">
                  <button className="btn btn-outline-primary btn-white">
                    Sign Up and Book Your First Nap!
                  </button>
                </NavLink>
              </div>
            </div>
          )}

          {currentUser && (
            <div>
              <section
                style={{
                  backgroundImage: "url(" + imgUrl + ")",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  height: "900px"
                }}
              >
                <div className="hp-btn">
                  <h2>
                    Welcome Back, <br />
                    <span>{currentUser.fullName}</span>
                  </h2>
                  <Link to="/location">
                    <button className="btn btn-outline-primary btn-white">
                      Book A Nap
                    </button>
                  </Link>
                </div>
              </section>

              <section className="booking">
                <h3>My Bookings</h3>
                <div className="border-dark" />

                <div className="booking-cards">
                  {bookingArray.map(oneBooking => (
                    <div className="card hp-card" key={oneBooking._id}>
                      <div className="card-body">
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
                        <button className="btn btn-outline-primary btn-dark card-link">
                          Cancel Booking
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>

        <div className="concept">
          <h4>Concept</h4>
          <div className="border-light" />

          <div className="concept-cards">
            <div className="card concept-card">
              <img src="../../images/icon1.svg" />
              <h5>Pick the most convenient location for you</h5>
              <div className="card-body">
                <p className="card-text">
                  We made sure to spread through the capital. Browse through our
                  different locations and find the most convenient one for you.
                </p>
              </div>
            </div>
            <div className="card concept-card">
              <img src="../../images/icon2.svg" />
              <h5>Come on the date, just relax</h5>
              <div className="card-body">
                <p className="card-text">
                  Once you've booked your nap (3 minutes tops!), the only thing
                  you've got to do and come on the date, lay down and relax.
                </p>
              </div>
            </div>
            <div className="card concept-card">
              <img src="../../images/icon3.svg" />
              <h5>You're good to go back to work!</h5>
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
