import React from 'react';

class CardLocation extends React.Component {
  state = {  }

  updateTruck(e) {
    this.props.updateTruck(e.target.value)
  }

  render() { 

    const { title, imgUrl, phone, inputValue, checked } = this.props;

    return ( 
      <div className="card card-loc wprock-img-zoom">
              <img
                className="card-img-top img-loc"
                src={imgUrl}
                alt="Card cap"
              />
              <div className="card-body pt-5">
                <label>
                  <h3>{title}</h3>
                  <p></p>
                  <p></p>
                  <p>
                    <i className="fas fa-phone fa-flip-horizontal" />
                    {phone}
                  </p>
                  <input
                    type="radio"
                    name="truck_id"
                    value={inputValue}
                    onChange={event => this.updateTruck(event)}
                    checked={checked}
                  />
                </label>
      </div>
      </div>
     );
  }
}
 
export default CardLocation;