import React from "react";
import { NavLink, Link } from "react-router-dom";

function HomePage(props) {
  const { currentUser } = props;

  return (
    <section>
      <div className="welcome-hp">
        {currentUser && (
          <div>
            <div className="hp-btn">
              <h2>Welcome back, {currentUser.fullName}!</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus aliquet eget est ac sagittis. Integer ultricies mauris
                eros, ut tempor quam finibus non. Proin sed eleifend leo, non
                congue sem. Vestibulum vitae ultricies ex. Morbi vehicula
                tristique nibh eu dignissim. Vestibulum vulputate porta lacinia.
                Curabitur lobortis finibus leo et consectetur.{" "}
              </p>
              <Link to="/location">
                <button className="btn btn-outline-primary">Book A Nap</button>
              </Link>
            </div>

            <h3>Your Booking</h3>
            <div className="card hp-card">
              <div className="card-body">
                <h5 className="card-title">40, rue du Colisée</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  15 October 2018
                </h6>
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="fas fa-check" />
                    Sound: <b>Birds & Brook</b>
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-check" />
                    Plaid: <b>Cashmere</b>
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-check" />
                    Energy Shot: <b>Daily</b>
                  </li>
                </ul>
                <a href="#" className="card-link">
                  Show Details
                </a>
              </div>
            </div>
          </div>
        )}

        {!currentUser && (
          <div>
            <p>Welcome to Napply</p>
            <button>
              <NavLink to="/signup">Sign up and book your first nap!</NavLink>
            </button>
          </div>
        )}
      </div>

      <div className="concept">
        <h4>Le concept</h4>
        <div className="card concept-card">
          <img
            className="card-img-top img-concept"
            src="../../images/maps.svg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card concept-card">
          <img
            className="card-img-top img-concept"
            src="../../images/relaxing.svg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card concept-card">
          <img
            className="card-img-top img-concept"
            src="../../images/headenergy.svg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>

      <div className="nap-benefits">
        <h4>Les effets bénéfiques de la sieste sur la santé </h4>
        <p>Ce temps de repos procure :</p>
        <ul>
          <li>
            une amélioration immédiate de la vigilance : attention,
            concentration, énergie, performance, humeur
          </li>
          <li>une très forte protection antistress </li>
          <li>
            une bonne régulation en termes de protection cardiovasculaire, avec
            une incidence sur l’hypertension artérielle (baisse)
          </li>
          <li>
            une meilleure mémorisation, ce qui est vrai aussi bien entendu pour
            le sommeil de nuit
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HomePage;
