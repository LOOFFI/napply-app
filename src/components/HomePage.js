import React from "react";

function HomePage(props) {
  const { currentUser } = props;

  return (
    <section>
      <h2>Home Page</h2>

      {currentUser && (
        <div>
          <p>Welcome back {currentUser.fullName}</p>
          <button>Book your nap!</button>
          <h3>Your Booking</h3>
          <p>Les bookings en cours</p>
        </div>
      )}

      {!currentUser && (
        <div>
          <p>Welcome to Napply</p>
          <button>Sign Up and book your first nap!</button>
        </div>
      )}

      <div>
        <h4>Le concept</h4>
        <p>Explications</p>
      </div>

      <div>
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
