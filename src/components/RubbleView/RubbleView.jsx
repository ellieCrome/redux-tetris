import React, { Component } from "react";
import PropTypes from "prop-types";
import Square from "../Square";

class RubbleView extends Component {
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

RubbleView.propTypes = {
  rubble: PropTypes.array
};

export default RubbleView;
