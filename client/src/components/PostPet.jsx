import React, { Component } from "react";
import axios from "axios";

class PostPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petName: "",
      petID: "",
      petType: "",
      ownerName: "",
      image: "",
      description: "",
    };
  }

  handleChange = (event) => {
    console.log(this.state);
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({
      [nam]: val,
      user: {
        petName: this.state.petName,
        petID: this.state.petID,
        petType: this.state.petType,
        ownerName: this.state.ownerName,
        image: this.state.image,
        description: this.state.description,
      },
    });
  };

  postClick = () => {
    console.log("clickkkk");
  };

  //   postFunction = () => {
  //     axios.post("/postPet");
  //   };

  render() {
    return (
      <div className="create-form">
        <div>
          <label>Pet Name </label>
          <input name="petName" onChange={this.handleChange}></input>
        </div>
        <div>
          <label>Pet ID </label>
          <input name="petID"></input>
        </div>
        <div>
          <label>Pet Type </label>
          <input name="petType" onChange={this.handleChange}></input>
        </div>
        <div>
          <label>Owner Name </label>
          <input name="ownerName" onChange={this.handleChange}></input>
        </div>
        <div>
          <label>Image URL</label>
          <input name="image" onChange={this.handleChange}></input>
        </div>
        <div>
          <label>Description </label>
          <input name="description" onChange={this.handleChange}></input>
        </div>
        <button onClick={this.postClick}>Post a Pet for adoption </button>
      </div>
    );
  }
}

export default PostPet;
