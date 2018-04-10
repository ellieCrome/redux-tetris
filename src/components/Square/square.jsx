import React, { Component } from "react";
import PropTypes from "prop-types";
import "./square.scss";

class Square extends Component {
  render() {
    var style = {
      left: (this.props.col - 1) * 25 + "px",
      top: (this.props.row - 1) * 25 + "px"
    };

    return <div className="square" style={style} />;
  }
}

Square.propTypes = {
  col: PropTypes.number,
  row: PropTypes.number
};

export default Square;
