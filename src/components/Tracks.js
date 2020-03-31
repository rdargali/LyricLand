import React, { Component } from "react";
import { Consumer } from "../context";

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          return <h1>tracks</h1>;
        }}
      </Consumer>
    );
  }
}

export default Tracks;
