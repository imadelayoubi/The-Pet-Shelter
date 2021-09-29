import React, { Component } from "react";
import Navbar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import PostPet from "./PostPet.jsx";
import axios from "axios";
import PetCard from "./PetCard.jsx";

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

  render() {
    return (
      <div>
        <Navbar />
        <h3>
          -----------------------------------------------------------------------
        </h3>

        <PostPet />
        <h3>
          -----------------------------------------------------------------------
        </h3>
        <PetCard petinfo={this.state.myPets} />
        <h3>
          -----------------------------------------------------------------------
        </h3>

        <Footer />
      </div>
    );
  }
}
