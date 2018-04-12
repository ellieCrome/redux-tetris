import React, { Component } from "react";
import PropTypes from "prop-types";
import Square from "../Square";

class PieceView extends Component {
  render() {
    return (
      <div>
        {this.props.piece
          .points()
          .map(point => (
            <Square
              key={point.x + " " + point.y}
              x={point.x}
              y={point.y}
              colour={point.colour}
            />
          ))}
      </div>
    );
  }
}

PieceView.propTypes = {
  piece: PropTypes.object
};

export default PieceView;
