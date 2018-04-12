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
    state.fallingPiece.rotate(isClockwise);

    if (this.fallingPieceOverlapsRubble(state)) {
      state = this.convertToRubble(state);
      state.fallingPiece = this.newPiece();
    }

    return state;
  }

  move(state, direction) {
    state.fallingPiece.move(direction);

    if (this.fallingPieceOverlapsRubble(state)) {
      state = this.convertToRubble(state);
      state.fallingPiece = this.newPiece();
    }

    return state;
  }

  fallOneRow(state) {
    if (state.fallingPiece.getMaxY() < state.totalY) {
      state.fallingPiece.offsetY++;

      if (this.fallingPieceOverlapsRubble(state)) {
        state = this.convertToRubble(state);
        state.fallingPiece = this.newPiece();
      }
    } else {
      state = this.convertToRubble(state);
      state.fallingPiece = this.newPiece();
    }

    return state;
  }

  fallingPieceOverlapsRubble(state) {
    return state.fallingPiece.points().some(p =>
      state.rubble.some(r => {
        return r.x == p.x && r.y == p.y;
      })
    );
  }

  convertToRubble(state) {
    state.rubble = state.rubble.concat(state.fallingPiece.points());

    return state;
  }
}

export default Game;
