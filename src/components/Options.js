import React from "react";
import { Redirect } from "react-router-dom";

import api from "../api.js";

class Options extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
      isSubmitSuccess: false
    };
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const { params } = this.props.match;

  //   api
  //     .put(`/options/${params.bookingId}`, this.state)
  //     .then(response => {
  //       console.log("Options MAJ", response.data);
  //       this.setState({ isSubmitSuccess: true });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       alert("Sorry! Something went wrong.");
  //     });
  // }
  handleSubmit() {
    this.props.recap()
    this.props.next()
  }

  updateSound(event) {
    const { value } = event.target;
    this.props.updateSound(value)
  }

  updatePlaid(event) {
    const { value } = event.target;
    this.props.updatePlaid(value)
  }

  updateEnergyShot(event) {
    const { value } = event.target;
    this.props.updateEnergyShot(value)
  }

  

  render() {
    // const { isSubmitSuccess } = this.state;

    // if (isSubmitSuccess) {
    //   const { params } = this.props.match;
    //   return <Redirect to={`/payment/${params.bookingId}`} />;
    // }
    const { sound, plaid, energyShot } = this.props;

    return (
      <section className="option-section">
        <h2>For Even More Comfort</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="options2">
            <div className="sounds">
              <legend className="option-title">SOUND</legend>
              <div className="option-input sound-input">
                <input
                  type="radio"
                  value="None"
                  name="sounds"
                  onChange={event => this.updateSound(event)}
                  checked={sound === "None"}
                />
                <label htmlFor="None">No Sound</label>
              </div>
              <div className="option-input sound-input">
                <input
                  type="radio"
                  value="Birds & Brook"
                  name="sounds"
                  onChange={event => this.updateSound(event)}
                  checked={sound === "Birds & Brook"}
                />
                <label htmlFor="Birds & Brook">Birds & Brook</label>
              </div>
              <div className="option-input sound-input">
                <input
                  type="radio"
                  value="See Waves"
                  name="sounds"
                  onChange={event => this.updateSound(event)}
                  checked={sound === "See Waves"}
                />
                <label htmlFor="See Waves">See Waves</label>
              </div>
              <div className="option-input sound-input">
                <input
                  type="radio"
                  value="Tibetan Chakra"
                  name="sounds"
                  onChange={event => this.updateSound(event)}
                  checked={sound === "Tibetan Chakra"}
                />
                <label htmlFor="Tibetan Chakra">Tibetan Chakra</label>
              </div>
            </div>

            <div className="blankets">
              <legend className="option-title">PLAID</legend>
              <div className="option-input plaid-input">
                <input
                  type="radio"
                  value="None"
                  name="plaids"
                  onChange={event => this.updatePlaid(event)}
                  checked={plaid === "None"}
                />
                <label htmlFor="None">No Plaid</label>
              </div>
              <div className="option-input plaid-input">
                <input
                  type="radio"
                  value="Cashmere"
                  name="plaids"
                  onChange={event => this.updatePlaid(event)}
                  checked={plaid === "Cashmere"}
                />
                <label htmlFor="Cashmere">Cashmere</label>
              </div>
              <div className="option-input plaid-input">
                <input
                  type="radio"
                  value="Fleece"
                  name="plaids"
                  onChange={event => this.updatePlaid(event)}
                  checked={plaid === "Fleece"}
                />
                <label htmlFor="Fleece">Fleece</label>
              </div>
            </div>

            <div className="juices">
              <legend className="option-title">ENERGY SHOT</legend>
              <div className="option-input sound-input no-price">
                <input
                  type="radio"
                  value="none"
                  name="juices"
                  onChange={event => this.updateEnergyShot(event)}
                  checked={energyShot === "none"}
                />
                <label htmlFor="none">No Energy Shot</label>
              </div>

              <div className="shotbox">
                <div className="juices-input">
                  <div className="juice-input">
                    <input
                      type="radio"
                      value="Super Green"
                      name="juices"
                      onChange={event => this.updateEnergyShot(event)}
                      checked={energyShot === "Super Green"}
                    />
                  </div>
                  <div className="juice-label">
                    <label htmlFor="Super Green">Super Green</label>
                  </div>
                  <div className="juice-price">
                    <p className="price">5€</p>
                  </div>
                </div>
                <small>Apple, Kiwi, Mint, Pineapple</small>
              </div>

              <div className="shotbox">
                <div className="juices-input">
                  <div className="juice-input">
                    <input
                      type="radio"
                      value="Veggie Detox"
                      name="juices"
                      onChange={event => this.updateEnergyShot(event)}
                      checked={energyShot === "Veggie Detox"}
                    />
                  </div>
                  <div className="juice-label">
                    <label htmlFor="Veggie Detox">Veggie Detox</label>
                  </div>
                  <div className="juice-price">
                    <p className="price">5€</p>
                  </div>
                </div>
                <small>Cucumber, Aloe Vera, Mint, Spinach</small>
              </div>

              <div className="shotbox">
                <div className="juices-input">
                  <div className="juice-input">
                    <input
                      type="radio"
                      value="White Paradise"
                      name="juices"
                      onChange={event => this.updateEnergyShot(event)}
                      checked={energyShot === "White Paradise"}
                    />
                  </div>
                  <div className="juice-label">
                    <label htmlFor="White Paradise">White Paradise</label>
                  </div>
                  <div className="juice-price">
                    <p className="price">6€</p>
                  </div>
                </div>
                <small>Almond Milk, Coconut, Pineapple</small>
              </div>
            </div>
          </div>
          <div className="option-btn">
            <button className="btn btn-outline-primary btn-sign">Next</button>
          </div>
        </form>
      </section>
    );
  }
}

export default Options;
