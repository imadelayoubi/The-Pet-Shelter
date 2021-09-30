import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="topnav">
          <a className="active" href="#home">
            The Pet Shelter
          </a>
          <a href="#about">We</a>
          <a href="#contact">Care</a>
          <a href="#about">About</a>
          <a href="#about">Animals</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
