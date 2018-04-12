import React, { Component } from "react";
import PropTypes from "prop-types";
import "./square.scss";

class Square extends Component {
  render() {
    var style = {
      left: this.props.x * 25 + "px",
      top: this.props.y * 25 + "px"
    };

    console.log(this.props)

    var className = "square " + this.props.colour;
    return <div className={className} style={style} />;
  }
}

Square.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  colour: PropTypes.string
};

export default Square;
