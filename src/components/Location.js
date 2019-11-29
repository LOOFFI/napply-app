import React from "react";
import CardLocation from "./CardLocation.js";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.updateTruck = this.updateTruck.bind(this);
    
  }

 
  handleSubmit(e) {
    if (this.props.truck_id!==null) {
      this.props.handleSubmit(this.props.currentUser._id)
    }
  }

  updateTruck(e) {  
    this.props.onSubmit(e);
  }

  render() {
  
  

  return (
      <section className="loc-section">
        <h2>Pick A Location</h2>
        
        <form onSubmit={event => this.handleSubmit(event)}>
        
          <div className="locations">
            <div className={"wprock-img-zoom-hover"}>
            <CardLocation 
              imgUrl={'../../images/la-defense-paris.jpg'}
              title={'La Défense - Parvis'}
              phone={'01.34.65.88.75'}
              inputValue={"La Défense - Parvis, 76 Rue de la Demi Lune - 92800 Puteaux"}
              checked={this.props.truck_id ==="La Défense - Parvis, 76 Rue de la Demi Lune - 92800 Puteaux"}
              updateTruck={(e) => this.updateTruck(e)}
            />
            </div>

            <div className={"wprock-img-zoom-hover"}>
            <CardLocation
              imgUrl={"../../images/montmartre.jpeg"}            
              title={'Paris - Montmartre'}
              phone={'01.35.66.21.90'}
              inputValue={'Paris - Montmartre, 34 Rue Des Cloys - 75018 Paris'}
              checked={this.props.truck_id ==="Paris - Montmartre, 34 Rue Des Cloys - 75018 Paris"}
              updateTruck={(e) => this.updateTruck(e)}
            />
            </div>

            <div className={"wprock-img-zoom-hover"}>
            <CardLocation
              imgUrl={'../../images/paris1.jpeg'}
              title={'Paris - Rivoli'}
              phone={'01.53.20.40.46'}
              inputValue={"Paris - Rivoli, Allée de Castiglione - 75001 Paris"}
              checked={this.props.truck_id ==="Paris - Rivoli, Allée de Castiglione - 75001 Paris"}
              updateTruck={(e) => this.updateTruck(e)}
            />
            </div>
            
          </div>


          <button className="btn btn-outline-primary btn-sign">
            Next step
          </button>


        </form>
      </section>
    );
  }
}

export default Location;
