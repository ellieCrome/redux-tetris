import React, { Component } from "react";
import PropTypes from "prop-types";
import Square from "../Square";

class PieceView extends Component {
  render() {
    return (
      <div>
        {this.props.rubble.map(point => (
          <Square key={point.x + " " + point.y} x={point.x} y={point.y} />
        ))}
      </div>
    );
  }
}

PieceView.propTypes = {
  rubble: PropTypes.object
};

export default PieceView;
