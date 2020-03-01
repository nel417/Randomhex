import React, { Component } from "react";
import Box from "./Box";
import "./App.css";

class Container extends Component {
  static defaultProps = {
    numBoxes: 12
  };
  render() {
    const boxes = Array.from({
      length: this.props.numBoxes
    }).map(() => <Box />);
    return (
      <div className="boxContainer">
        <div className="Container"> {boxes} </div>;{" "}
      </div>
    );
  }
}

export default Container;
