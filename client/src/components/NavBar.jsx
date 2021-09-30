import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div class="topnav">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <input type="text" placeholder="Search" />
        </div>
      </div>
    );
  }
}

export default Navbar;
