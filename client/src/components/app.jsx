import React, { Component } from "react";
import Navbar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import PostPet from "./PostPet.jsx";
import axios from "axios";
import PetCard from "./PetCard.jsx";
import css from "../index.css";
import SingIn from "./SignIn.jsx";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      myPets: [],
      
    };
  }

  componentDidMount() {
    axios.get("/getpets").then((data) => {
      console.log("petssssssssssssssssssssssssssssssss", data);
      this.setState({
        myPets: data.data,
      });
    });
  }

  // getId = (id) => {
  //   this.setState({});
  // };

  deletePet = (_id, e) => {
    console.log(this.state.myPets);
    console.log("idddddddddddddddddddd", _id);

    axios.delete(`/deletePet/${_id}`);
    // .then((result) => {
    //   const pets = this.state.myPets.filter((pet) => pet.petID !== id);
    //   this.setState({
    //     myPets: pets,
    //   });
    // });
  };

  render() {
    
    return (
      <div>
        <Navbar />
        <SingIn />

        <PostPet />

        <PetCard deletePet={this.deletePet} petinfo={this.state.myPets} />

        {/* <Footer /> */}
      </div>
    );
  }
}
