import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PieceView from "../PieceView";
import RubbleView from "../RubbleView";
import "./gameView.scss";

const mapStateToProps = state => {
  return {
    piece: state.fallingPiece,
    rubble: state.rubble
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fallOneRow() {
      dispatch({
        type: "FALL_ONE"
      });
    },
    move(direction) {
      dispatch({
        type: "MOVE",
        direction: direction
      });
    },
    rotate(direction) {
      dispatch({
        type: "ROTATE",
        direction: direction
      });
    }
  };
};

class GameView extends Component {
  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  componentDidMount() {
    setInterval(() => {
      this.props.fallOneRow();
    }, 1000);
  }

  handleKeyDown(event) {
    let UP = 38;
    let DOWN = 40;
    let LEFT = 37;
    let RIGHT = 39;
    let X = 88;
    let Z = 90;

    switch (event.keyCode) {
      case LEFT:
        this.props.move("LEFT");
        break;
      case RIGHT:
        this.props.move("RIGHT");
        break;
      case DOWN:
        this.props.move("DOWN");
        break;
      case UP:
      case X:
        this.props.rotate("CLOCKWISE");
        break;
      case Z:
        this.props.rotate("ANTI_CLOCKWISE");
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="border">
        <PieceView piece={this.props.piece} />
        <RubbleView rubble={this.props.rubble} />
      </div>
    );
  }
}

GameView.propTypes = {
  piece: PropTypes.object,
  rubble: PropTypes.array,
  fallOneRow: PropTypes.func,
  move: PropTypes.func,
  rotate: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(GameView);
