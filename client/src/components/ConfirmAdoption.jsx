import React, { Component } from "react";
import axios from "axios";

class ConfirmAdoption extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <input></input>
        <input></input>
        <button>Confirm Adoption</button>
      </div>
    );
  }
}

export default ConfirmAdoption;
