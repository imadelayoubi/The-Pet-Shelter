import React, { Component } from "react";
import axios from "axios";
import "../index.css";

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
      pet: {},
    };
  }

  handleChange = (event) => {
    console.log(this.state);
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({
      [nam]: val,
      pet: {
        petName: this.state.petName,
        petID: this.state.petID,
        petType: this.state.petType,
        ownerName: this.state.ownerName,
        imageURL: this.state.image,
        description: this.state.description,
      },
    });
  };
  // componentDidUpdate() {
  //   // this.postClick();
  // }
  postClick = (event) => {
    location.reload;
    event.preventDefault();
    console.log("clickkkk");

    axios.post("/postpet", this.state.pet).then(() => {
      console.log("data sent successfully");
    });
  };

  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label>Pet Name </label>
          <input name="petName" onChange={this.handleChange}></input>
        </div>
        <br />
        <div>
          <label>Pet ID </label>
          <input name="petID" onChange={this.handleChange}></input>
        </div>
        <br />

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
        <button id="addbtn" onClick={this.postClick}>
          Post a Pet for adoption{" "}
        </button>
      </div>
    );
  }
}

export default PostPet;
