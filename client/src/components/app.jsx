import React, { Component } from "react";
import Navbar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import PostPet from "./PostPet.jsx";

export default class App extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />

        <PostPet />

        <Footer />
      </div>
    );
  }
}
