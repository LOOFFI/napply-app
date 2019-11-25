import React from "react";
import { NavLink, Link } from "react-router-dom";
import api from "../api";
let imgUrl = "../../images/energy-pod-back.png";
let puceImg = "../../images/icon-04.svg";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingArray: []
    };
  }

  componentDidMount() {
      this.getBookings();
  }

  componentDidUpdate(prevProps) {
    
    if (!prevProps.currentUser) {
      this.getBookings();
    }
  }

  getBookings() {
    if (this.props.currentUser) {

    api .get(`/booking-date/`)
        .then(response => this.setState({ bookingArray: response.data }))
        .catch(err => console.log("error", err));
    }
  }

  deleteBooking(oneBooking) {

   api.delete(`/booking/${oneBooking._id}`)
      .then(response => {
        this.getBookings();
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { currentUser } = this.props;
    const { bookingArray } = this.state;
   
    
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
                <h2>Welcome</h2>

                <NavLink to="/signup">
                  <button className="btn btn-outline-primary btn-white">
                    Book Your First Nap!
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
                  <Link to="/booking">
                    <button className="btn btn-outline-primary btn-white">
                      Book A Nap
                    </button>
                  </Link>
                </div>
              </section>

              <section className="booking">
                <h3>My Bookings</h3>
                <div className="border-dark" />

                {this.state.bookingArray.length < 1 && <p>No bookings yet.</p>}
                <div className="booking-cards">
                  {bookingArray.map(oneBooking => (
                    <div className="card hp-card" key={oneBooking._id}>
                      <div className="card-body">
                        <h5 className="card-title">
                          {oneBooking.truck_id.slice(
                            0,
                            oneBooking.truck_id.indexOf(",")
                          )}
                        </h5>
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
                          {oneBooking.sound !== "None" ? (
                            <li className="list-group-item">
                              <i className="fas fa-check" />
                              Sound: <b>{oneBooking.sound}</b>
                            </li>
                          ) : (
                            <li className="list-group-item" id="negative">
                              No Sound
                            </li>
                          )}

                          {oneBooking.plaid !== "None" ? (
                            <li className="list-group-item">
                              <i className="fas fa-check" />
                              Plaid: <b>{oneBooking.plaid}</b>
                            </li>
                          ) : (
                            <li className="list-group-item" id="negative">
                              No Plaid
                            </li>
                          )}

                          {oneBooking.energyShot !== "none" ? (
                            <li className="list-group-item">
                              <i className="fas fa-check" />
                              Energy Shot: <b>{oneBooking.energyShot}</b>
                            </li>
                          ) : (
                            <li className="list-group-item" id="negative">
                              No Energy Shot
                            </li>
                          )}
                        </ul>
                        <button
                          className="delete btn btn-outline-primary btn-dark card-link"
                          onClick={() => this.deleteBooking(oneBooking)}
                        >
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
              <img src="../../images/icon1.svg" alt=''/>
              <h5>Pick the most convenient location for you</h5>
              <div className="card-body">
                <p className="card-text">
                  We made sure to spread through the capital. Browse through our
                  different locations and find the most convenient one for you.
                </p>
              </div>
            </div>
            <div className="card concept-card">
              <img src="../../images/icon2.svg" alt=''/>
              <h5>
                Come on the date, <br />
                just relax
              </h5>
              <div className="card-body">
                <p className="card-text">
                  Once you've booked your nap <br />
                  (3 minutes tops), the only thing you've got to do and come on
                  the date, lay down and relax.
                </p>
              </div>
            </div>
            <div className="card concept-card">
              <img src="../../images/icon3.svg" alt=''/>
              <h5>
                You're good to go back <br />
                to work!
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
            <img src="../../images/rest-illustration.jpg" alt=''/>
          </div>
          <div className="benefits-info">
            <h4>
              Napply will help you be at <br />
              <span>Your very best!</span>
            </h4>
            <h5>
              Napping at work sounds pretty risky, but it does give you the
              chance to take a little time, get back in the zone and recharge
              your batteries.
            </h5>
            <p>Taking some time to nap and rest will bring you:</p>
            <ul
              style={{
                listStyleImage: "url(" + puceImg + ")"
              }}
            >
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
