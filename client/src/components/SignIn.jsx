import React, { Component } from "react";

class SingIn extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Type in your UserName" />
        <input type="password" placeholder="Type in your password" />
        <button>Sign In</button>
      </div>
    );
  }
}

export default SingIn;
