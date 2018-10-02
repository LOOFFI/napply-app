import React from "react";
import { Redirect } from "react-router-dom";

import api from "../api.js";

class Options extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sound: "Birds & Brook",
      plaid: "Cashmere",
      energyShot: "Super Green",
      isSubmitSuccess: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { params } = this.props.match;

    api
      .put(`/options/${params.bookingId}`, this.state)
      .then(response => {
        console.log("Options MAJ", response.data);
        this.setState({ isSubmitSuccess: true });
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! Something went wrong. 💩");
      });
  }

  updateSound(event) {
    const { value } = event.target;
    this.setState({ sound: value });
  }

  updatePlaid(event) {
    const { value } = event.target;
    this.setState({ plaid: value });
  }

  updateEnergyShot(event) {
    const { value } = event.target;
    this.setState({ energyShot: value });
  }

  render() {
    const { isSubmitSuccess } = this.state;

    if (isSubmitSuccess) {
      const { params } = this.props.match;
      return <Redirect to={`/payment/${params.bookingId}`} />;
    }

    return (
      <section className="loc-section">
        <h2>For Even More Comfort</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="options">
            <div className="sounds">
              <legend>Sound</legend>
              <div className="option-input">
                <input
                  type="radio"
                  value="None"
                  name="sounds"
                  onChange={event => this.updateSound(event)}
                  checked={this.state.sound === "None"}
                />
                <label htmlFor="None">No Sound</label>
              </div>
              <div className="option-input">
                <input
                  type="radio"
                  value="Birds & Brook"
                  name="sounds"
                  onChange={event => this.updateSound(event)}
                  checked={this.state.sound === "Birds & Brook"}
                />
                <label htmlFor="Birds & Brook">Birds & Brook</label>
              </div>
              <div className="option-input">
                <input
                  type="radio"
                  value="See Waves"
                  name="sounds"
                  onChange={event => this.updateSound(event)}
                  checked={this.state.sound === "See Waves"}
                />
                <label htmlFor="See Waves">See Waves</label>
              </div>
              <div className="option-input">
                <input
                  type="radio"
                  value="Tibetan Chakra"
                  name="sounds"
                  onChange={event => this.updateSound(event)}
                  checked={this.state.sound === "Tibetan Chakra"}
                />
                <label htmlFor="Tibetan Chakra">Tibetan Chakra</label>
              </div>
            </div>

            <div className="blankets">
              <legend>Plaid</legend>
              <div className="option-input">
                <input
                  type="radio"
                  value="Cashmere"
                  name="plaids"
                  onChange={event => this.updatePlaid(event)}
                  checked={this.state.plaid === "Cashmere"}
                />
                <label htmlFor="Cashmere">Cashmere</label>
              </div>
              <div className="option-input">
                <input
                  type="radio"
                  value="Fleece"
                  name="plaids"
                  onChange={event => this.updatePlaid(event)}
                  checked={this.state.plaid === "Fleece"}
                />
                <label htmlFor="Fleece">Fleece</label>
              </div>

              <div className="option-input">
                <input
                  type="radio"
                  value="None"
                  name="plaids"
                  onChange={event => this.updatePlaid(event)}
                  checked={this.state.plaid === "None"}
                />
                <label htmlFor="None">None</label>
              </div>
            </div>

            <div className="juices">
              <legend>Energy shot</legend>
              <div className="option-input">
                <input
                  type="radio"
                  value="Super Green"
                  name="juices"
                  onChange={event => this.updateEnergyShot(event)}
                  checked={this.state.energyShot === "Super Green"}
                />
                <label htmlFor="Super Green">
                  Super Green : Apple / Kiwi / Mint
                </label>
              </div>
              <div className="option-input">
                <input
                  type="radio"
                  value="Veggie Detox"
                  name="juices"
                  onChange={event => this.updateEnergyShot(event)}
                  checked={this.state.energyShot === "Veggie Detox"}
                />
                <label htmlFor="Veggie Detox">
                  Veggie Detox : Cucumber / Aloe Vera / Mint / Spinach
                </label>
              </div>
              <div className="option-input">
                <input
                  type="radio"
                  value="White Paradise"
                  name="juices"
                  onChange={event => this.updateEnergyShot(event)}
                  checked={this.state.energyShot === "White Paradise"}
                />
                <label htmlFor="White Paradise">
                  White Paradise : Almond Milk / Coconut / Pineapple
                </label>
              </div>
              <div className="option-input">
                <input
                  type="radio"
                  value="None"
                  name="juices"
                  onChange={event => this.updateEnergyShot(event)}
                  checked={this.state.energyShot === "None"}
                />
                <label htmlFor="None">None</label>
              </div>
            </div>
          </div>
          <button className="btn btn-outline-primary btn-sign">Next</button>
        </form>
      </section>
    );
  }
}

export default Options;
