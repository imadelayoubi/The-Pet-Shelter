import React, { Component } from "react";
import axios from "axios";

class PetCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteById = (e) => {
    this.props.deletePet(e.target.value);
  };

  render() {
    console.log("infpooooo", this.props.petinfo);
    return (
      <div className="card">
        {this.props.petinfo.map((pet, key) => {
          console.log(this.props.petinfo);
          return (
            <div
              className="card"
              style={({ width: 100, height: 120 }, { position: "relative" })}
              key={key}
            >
              <img
                className="card-img-top"
                src={pet.imageURL}
                style={{ width: 220, height: 220 }}
                alt=""
              />
              <div className="card-body">
                <button>{pet.petName}</button>
                <p> {pet.petID}</p>
                <p className="card-text"> {pet.petType}</p>
                <p className="card-text">{pet.ownerName}</p>
                <p className="card-text"> {pet.description}</p>
                <button>Request Adoption</button>
                <button value={pet._id} onClick={this.deleteById}>
                  Confirm Adoption
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PetCard;
