import React, { Component } from "react";
import axios from "axios";

class PetCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.petinfo);
    return (
      <div className="card">
        {this.props.petinfo.map((pet) => {
          return (
            <div>
              <img src={pet.imageURL} alt="" />
              <button>{pet.petName}</button>
              <p> {pet.petID}</p>
              <p className=""> {pet.petType}</p>
              <p>{pet.petName}</p>
              <p> {pet.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PetCard;
