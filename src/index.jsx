import React from "react";
import { render } from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

import Game from "./models/Game";
import Piece from "./models/Piece";
import GameView from "./components/GameView";

const game = new Game();
const initialState = game.generate();
const store = createStore(reducer, initialState, applyMiddleware(logger));

function reducer(state, action) {
  let newState = Object.assign({}, state);
  let newFallingPiece = Object.assign(new Piece(), state.fallingPiece);
  newState.fallingPiece = newFallingPiece;

  switch (action.type) {
    case "FALL_ONE":
      return game.fallOneRow(newState);
    case "ROTATE":
      var isClockwise = false;
      if (action.direction == "CLOCKWISE") isClockwise = true;

      return game.rotate(newState, isClockwise);
    case "MOVE":
      return game.move(newState, action.direction);
    default:
      return state;
  }
}

render(
  <Provider store={store}>
    <GameView />
  </Provider>,
  document.getElementById("app")
);
