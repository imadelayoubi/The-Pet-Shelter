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
            Home
          </a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
