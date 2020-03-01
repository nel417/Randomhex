import React, { Component } from "react";
import "./Container.css";

class Box extends Component {
  static defaultProps = {
    colorArr: [
      "#a8e6cf",
      "#413c69",
      "#d7fffd",
      "#75daad",
      "#f35588",
      "#dc2ade",
      "#a3f7bf",
      "#f4dada",
      "#ffb6b9",
      "#feb72b",
      "#f1f3f4",
      "#27496d",
      "#21243d",
      "#fdba9a",
      "#9399ff",
      "#fbe3b9",
      "#400082",
      "#ff7315",
      "#ffe8d6",
      "#678a74",
      "#706c61",
      "#e1f4f3",
      "#333333",
      "#434e52",
      "#ededed",
      "#fcf8e8",
      "#ecdfc8",
      "#b21f66",
      "#30475e",
      "#feb72b",
      "#9de3d0",
      "#fafba4",
      "#8ac6d1",
      "#f6f4e6",
      "#ede59a",
      "#d5c455",
      "#fddb3a",
      "#effcef",
      "#ccedd2",
      "#94d3ac",
      "#655c56",
      "#e89da2",
      "#ee8572",
      "#bbcfff",
      "#21bf73",
      "#a7e9af"
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      color: this.choice(this.props.colorArr)
    };
  }

  handleClick = () => {
    let newColor = this.choice(this.props.colorArr);
    this.setState({
      color: newColor
    });
  };

  choice = arr => {
    let randomI = Math.floor(Math.random() * arr.length);
    return arr[randomI];
  };

  render() {
    return (
      <div
        className="Box"
        style={{
          backgroundColor: this.state.color
        }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Box;
