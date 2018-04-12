import Piece from "../models/Piece";

import PieceHelper from "./helpers/PieceHelper";
import GameHelper from "./helpers/GameHelper";

export function pieceReducer(state, action) {
  let newState = Object.assign({}, state);
  let newFallingPiece = Object.assign(new Piece(), state.fallingPiece);
  newState.fallingPiece = newFallingPiece;

  switch (action.type) {
    case "FALL_ONE":
      return handleFallOne(newState);
    case "ROTATE":
      return handleRotate(newState, action.direction);
    case "MOVE":
      return handleMove(newState, action.direction);
    default:
      return state;
  }
}

function handleFallOne(state) {
  let withinYBoundary = PieceHelper.getMaxY(state.fallingPiece) < state.totalY;

  if (withinYBoundary) {
    state.fallingPiece = PieceHelper.fallOneRow(state.fallingPiece);

    if (GameHelper.fallingPieceOverlapsRubble(state)) {
      state.fallingPiece = PieceHelper.undoFallOneRow(state.fallingPiece);
      state = GameHelper.convertPieceToRubble(state);
    }
  } else {
    state = GameHelper.convertPieceToRubble(state);
  }

  return state;
}

function handleRotate(state, direction) {
  var isClockwise;
  direction == "CLOCKWISE" ? (isClockwise = true) : (isClockwise = false);

  state.fallingPiece = PieceHelper.rotate(state.fallingPiece, isClockwise);

  if (GameHelper.fallingPieceOverlapsRubble(state)) {
    //UNDO?
    state = GameHelper.convertPieceToRubble(state);
  }
  return state;
}

function handleMove(state, direction) {
  state.fallingPiece = PieceHelper.move(state.fallingPiece, direction);

  if (GameHelper.fallingPieceOverlapsRubble(state)) {
    state.fallingPiece = PieceHelper.undoMove(state.fallingPiece, direction);
    state = GameHelper.convertPieceToRubble(state);
  }

  return state;
}
