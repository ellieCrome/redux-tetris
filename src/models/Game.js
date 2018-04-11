import Piece from "./Piece";
import Shapes from "./Shapes";

class Game {
  generate() {
    return {
      totalX: 20,
      totalY: 15,
      rubble: {},
      fallingPiece: this.newPiece()
    };
  }

  newPiece() {
    let randomIndex = Math.floor(Math.random() * 7);
    return new Piece(Shapes[randomIndex]);
  }

  rotate(state, isClockwise) {
    let newState = Object.assign({}, state);
    let newFallingPiece = Object.assign(new Piece(), state.fallingPiece);

    newFallingPiece.rotate(isClockwise);
    newState.fallingPiece = newFallingPiece;

    return newState;
  }

  move(state, direction) {
    let newState = Object.assign({}, state);
    let newFallingPiece = Object.assign(new Piece(), state.fallingPiece);

    newFallingPiece.move(direction);
    newState.fallingPiece = newFallingPiece;

    return newState;
  }

  fallOneRow(state) {
    let newState = Object.assign({}, state);

    if (state.fallingPiece.offsetY + 1 < state.totalY) {
      var newFallingPiece = Object.assign(new Piece(), state.fallingPiece);
      newFallingPiece.offsetY++;

      newState.fallingPiece = newFallingPiece;
    } else {
      newState.fallingPiece = this.newPiece();
    }

    return newState;
  }
}

export default Game;
