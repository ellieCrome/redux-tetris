import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PieceView from "../PieceView";
import "./gameView.scss";

const mapStateToProps = state => {
  return {
    piece: state.fallingPiece
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fallOneRow() {
      dispatch({
        type: "FALL_ONE"
      });
    },
    rotateClockwise() {
      dispatch({
        type: "ROTATE_CLOCKWISE"
      });
    },
    rotateAnticlockwise() {
      dispatch({
        type: "ROTATE_ANTICLOCKWISE"
      });
    }
  };
};

class GameView extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.fallOneRow();
  }, 1000);
  }

  handleClockwiseClick() {
    this.props.rotateClockwise();
  }

  handleAnticlockwiseClick() {
    this.props.rotateAnticlockwise();
  }

  render() {
    return (
      <div>
        <div className="border">
          <PieceView piece={this.props.piece} />
        </div>

        <div>
          <button onClick={this.handleClockwiseClick.bind(this)}>
            ROTATE CLOCKWISE
          </button>
          <button onClick={this.handleAnticlockwiseClick.bind(this)}>
            ROTATE ANTICLOCKWISE
          </button>
        </div>
      </div>
    );
  }
}

GameView.propTypes = {
  piece: PropTypes.object,
  fallOneRow: PropTypes.func,
  rotateClockwise: PropTypes.func,
  rotateAnticlockwise: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(GameView);
