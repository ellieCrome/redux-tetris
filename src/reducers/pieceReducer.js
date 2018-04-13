import Piece from "../models/Piece";
import Game from "../models/Game";

import PieceHelper from "./helpers/PieceHelper";
import GameHelper from "./helpers/GameHelper";

export function pieceReducer(state, action) {
  let newState = Object.assign({}, state);
  let newFallingPiece = Object.assign(new Piece(), state.fallingPiece);
  newState.fallingPiece = newFallingPiece;

  switch (action.type) {
    case "RESTART":
      return handleRestart();
    case "PAUSE":
      return handlePause(newState);
    case "FALL_ONE":
      if (newState.isPaused || newState.isGameOver) return state;
      return handleFallOne(newState);
    case "ROTATE":
      if (newState.isPaused || newState.isGameOver) return state;
      return handleRotate(newState, action.direction);
    case "MOVE":
      if (newState.isPaused || newState.isGameOver) return state;
      return handleMove(newState, action.direction);
    default:
      return state;
  }
}

function handleFallOne(state) {
  let withinYBoundary =
    PieceHelper.getMaxY(state.fallingPiece) < state.totalY - 1;

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

function handleRestart() {
  var game = new Game();

  return game.generate();
}

function handlePause(state) {
  state.isPaused = !state.isPaused;

  return state;
}
