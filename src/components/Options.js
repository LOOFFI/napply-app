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
      <section>
        <h2>Choose your options</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <div>
            <legend>Sound</legend>
            <div>
              <input
                type="radio"
                value="Birds & Brook"
                name="sounds"
                onChange={event => this.updateSound(event)}
                checked={this.state.sound === "Birds & Brook"}
              />
              <label >Birds & Brook</label>
            </div>
            <div>
              <input
                type="radio"
                value="Sea Waves"
                name="sounds"
                onChange={event => this.updateSound(event)}
                checked={this.state.sound === "Sea Waves"}
              />
              <label >Sea Waves</label>
            </div>
            <div>
              <input
                type="radio"
                value="Tibetan Chakra"
                name="sounds"
                onChange={event => this.updateSound(event)}
                checked={this.state.sound === "Tibetan Chakra"}
              />
              <label >Tibetan Chakra</label>
            </div>
            <div>
              <input
                type="radio"
                value="None"
                name="sounds"
                onChange={event => this.updateSound(event)}
                checked={this.state.sound === "None"}
              />
              <label >None</label>
            </div>
          </div>

          <div>
            <legend>Plaid</legend>
            <div>
              <input
                type="radio"
                value="Cashmere"
                name="plaids"
                onChange={event => this.updatePlaid(event)}
                checked={this.state.plaid === "Cashmere"}
              />
              <label >Cashmere</label>
            </div>
            <div>
              <input
                type="radio"
                value="Fleece"
                name="plaids"
                onChange={event => this.updatePlaid(event)}
                checked={this.state.plaid === "Fleece"}
              />
              <label >Fleece</label>
            </div>

            <div>
              <input
                type="radio"
                value="None"
                name="plaids"
                onChange={event => this.updatePlaid(event)}
                checked={this.state.plaid === "None"}
              />
              <label >None</label>
            </div>
          </div>

          <div>
            <legend>Energy shot</legend>
            <div>
              <input
                type="radio"
                value="Super Green"
                name="juices"
                onChange={event => this.updateEnergyShot(event)}
                checked={this.state.energyShot === "Super Green"}
              />
              <label >Super Green : Apple / Kiwi / Mint</label>
            </div>
            <div>
              <input
                type="radio"
                value="Veggie Detox"
                name="juices"
                onChange={event => this.updateEnergyShot(event)}
                checked={this.state.energyShot === "Veggie Detox"}
              />
              <label >
                Veggie Detox : Cucumber / Aloe Vera / Mint / Spinach
              </label>
            </div>
            <div>
              <input
                type="radio"
                value="White Paradise"
                name="juices"
                onChange={event => this.updateEnergyShot(event)}
                checked={this.state.energyShot === "White Paradise"}
              />
              <label >
                White Paradise : Almond Milk / Coconut / Pineapple
              </label>
            </div>
            <div>
              <input
                type="radio"
                value="None"
                name="juices"
                onChange={event => this.updateEnergyShot(event)}
                checked={this.state.energyShot === "None"}
              />
              <label >None</label>
            </div>
          </div>

          <button>Next</button>
        </form>
      </section>
    );
  }
}

export default Options;
