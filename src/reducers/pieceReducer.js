import Piece from "../models/Piece";

import {
  fallOneRow,
  undoFallOneRow,
  rotate,
  move,
  undoMove,
  getMaxY
} from "./helpers/PieceHelper";
import {
  convertPieceToRubble,
  fallingPieceOverlapsRubble
} from "./helpers/GameHelper";

export function pieceReducer(state, action) {
  let newState = Object.assign({}, state);
  let newFallingPiece = Object.assign(new Piece(), state.fallingPiece);
  newState.fallingPiece = newFallingPiece;

  switch (action.type) {
    case "FALL_ONE":
      if (getMaxY(newState.fallingPiece) < state.totalY) {
        newState.fallingPiece = fallOneRow(newState.fallingPiece);

        if (fallingPieceOverlapsRubble(newState)) {
          newState.fallingPiece = undoFallOneRow(newState.fallingPiece);
          newState = convertPieceToRubble(newState);
          newState.fallingPiece = new Piece();
        }
      } else {
        newState = convertPieceToRubble(newState);
        newState.fallingPiece = new Piece();
      }
      return newState;

    case "ROTATE":
      var isClockwise = false;
      if (action.direction == "CLOCKWISE") isClockwise = true;
      newState.fallingPiece = rotate(newState.fallingPiece, isClockwise);

      if (fallingPieceOverlapsRubble(newState)) {
        newState = convertPieceToRubble(newState);
        newState.fallingPiece = new Piece();
      }
      return newState;

    case "MOVE":
      newState.fallingPiece = move(newState.fallingPiece, action.direction);

      if (fallingPieceOverlapsRubble(newState)) {
        newState.fallingPiece = undoMove(
          newState.fallingPiece,
          action.direction
        );
        newState = convertPieceToRubble(newState);
        newState.fallingPiece = new Piece();
      }

      return newState;
    default:
      return state;
  }
}
