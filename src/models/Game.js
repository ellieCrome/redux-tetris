import Piece from "./Piece";
import Shapes from "./Shapes";

class Game {
  generate() {
    return {
      totalX: 20,
      totalY: 15,
      rubble: [],
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

    if (this.fallingPieceOverlapsRubble(newState)) {
      newState = this.convertToRubble(state);
      newState.fallingPiece = this.newPiece();
    }

    return newState;
  }

  move(state, direction) {
    let newState = Object.assign({}, state);
    let newFallingPiece = Object.assign(new Piece(), state.fallingPiece);

    newFallingPiece.move(direction);
    newState.fallingPiece = newFallingPiece;

    if (this.fallingPieceOverlapsRubble(newState)) {
      newState = this.convertToRubble(state);
      newState.fallingPiece = this.newPiece();
    }

    return newState;
  }

  fallOneRow(state) {
    let newState = Object.assign({}, state);

    if (state.fallingPiece.getMaxY() < state.totalY) {
      var newFallingPiece = Object.assign(new Piece(), state.fallingPiece);
      newFallingPiece.offsetY++;

      newState.fallingPiece = newFallingPiece;

      if (this.fallingPieceOverlapsRubble(newState)) {
        newState = this.convertToRubble(state);
        newState.fallingPiece = this.newPiece();
      }
    } else {
      newState = this.convertToRubble(state);
      newState.fallingPiece = this.newPiece();
    }

    return newState;
  }

  fallingPieceOverlapsRubble(state) {
    return state.fallingPiece.points().some(p =>
      state.rubble.some(r => {
        return r.x == p.x && r.y == p.y;
      })
    );
  }

  convertToRubble(state) {
    let newState = Object.assign({}, state);
    newState.rubble = newState.rubble.concat(newState.fallingPiece.points());

    return newState;
  }
}

export default Game;
