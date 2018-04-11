import React, { Component } from "react";
import PropTypes from "prop-types";
import "./square.scss";

class Square extends Component {
  render() {
    var style = {
      left: this.props.x * 25 + "px",
      top: this.props.y * 25 + "px"
    };

    return <div className="square" style={style} />;
  }
}

Square.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number
};

export default Square;
