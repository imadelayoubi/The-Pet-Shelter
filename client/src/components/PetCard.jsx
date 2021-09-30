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

  updateDescription = (e) => {
    this.props.updateById(e.target.value);
  };

  render() {
    console.log("infpooooo", this.props.petinfo);
    return (
      <div className="row">
        {this.props.petinfo.map((pet, key) => {
          console.log(this.props.petinfo);
          return (
            <div className="col-3 myCard" key={key}>
              <img
                className="card-img-top"
                src={pet.imageURL}
                style={{ width: 350, height: 350 }}
                alt=""
              />
              <div className="card-body">
                <h3>{pet.petName}</h3>
                <p> {pet.petID}</p>
                <p className="card-text"> {pet.petType}</p>
                <p className="card-text">{pet.ownerName}</p>
                <p className="card-text"> {pet.description}</p>
                <button value={pet._id} onClick={this.updateDescription}>
                  Update
                </button>
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
