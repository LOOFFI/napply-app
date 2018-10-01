import React from "react";
import { Redirect } from "react-router-dom";

import api from "../api.js";

class Options extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sound: "sound1",
      plaid: "plaid1",
      energyShot: "juice1",
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
                value="sound1"
                name="sounds"
                onChange={event => this.updateSound(event)}
                checked={this.state.sound === "sound1"}
              />
              <label for="sound1">Sound 1</label>
            </div>
            <div>
              <input
                type="radio"
                value="sound2"
                name="sounds"
                onChange={event => this.updateSound(event)}
                checked={this.state.sound === "sound2"}
              />
              <label for="sound2">Sound 2</label>
            </div>
            <div>
              <input
                type="radio"
                value="sound3"
                name="sounds"
                onChange={event => this.updateSound(event)}
                checked={this.state.sound === "sound3"}
              />
              <label for="sound3">Sound 3</label>
            </div>
            <div>
              <input
                type="radio"
                value="none"
                name="sounds"
                onChange={event => this.updateSound(event)}
                checked={this.state.sound === "none"}
              />
              <label for="sound4">None</label>
            </div>
          </div>

          <div>
            <legend>Plaid</legend>
            <div>
              <input
                type="radio"
                value="plaid1"
                name="plaids"
                onChange={event => this.updatePlaid(event)}
                checked={this.state.plaid === "plaid1"}
              />
              <label for="plaid1">Plaid 1</label>
            </div>
            <div>
              <input
                type="radio"
                value="plaid2"
                name="plaids"
                onChange={event => this.updatePlaid(event)}
                checked={this.state.plaid === "plaid2"}
              />
              <label for="plaid2">Plaid 2</label>
            </div>
            <div>
              <input
                type="radio"
                value="plaid3"
                name="plaids"
                onChange={event => this.updatePlaid(event)}
                checked={this.state.plaid === "plaid3"}
              />
              <label for="plaid3">PLaid 3</label>
            </div>
            <div>
              <input
                type="radio"
                value="none"
                name="plaids"
                onChange={event => this.updatePlaid(event)}
                checked={this.state.plaid === "none"}
              />
              <label for="plaid4">None</label>
            </div>
          </div>

          <div>
            <legend>Energy shot</legend>
            <div>
              <input
                type="radio"
                value="juice1"
                name="juices"
                onChange={event => this.updateEnergyShot(event)}
                checked={this.state.energyShot === "juice1"}
              />
              <label for="juice1">Juice 1</label>
            </div>
            <div>
              <input
                type="radio"
                value="juice2"
                name="juices"
                onChange={event => this.updateEnergyShot(event)}
                checked={this.state.energyShot === "juice2"}
              />
              <label for="juice2">Juice 2</label>
            </div>
            <div>
              <input
                type="radio"
                value="juice3"
                name="juices"
                onChange={event => this.updateEnergyShot(event)}
                checked={this.state.energyShot === "juice3"}
              />
              <label for="juice3">Juice 3</label>
            </div>
            <div>
              <input
                type="radio"
                value="none"
                name="juices"
                onChange={event => this.updateEnergyShot(event)}
                checked={this.state.energyShot === "none"}
              />
              <label for="juice4">None</label>
            </div>
          </div>

          <button>Next</button>
        </form>
      </section>
    );
  }
}

export default Options;
