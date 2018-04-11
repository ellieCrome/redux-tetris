import React from "react";
import { render } from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

import Game from "./models/Game";
import GameView from "./components/GameView";

const game = new Game();
const initialState = game.generate();
const store = createStore(reducer, initialState, applyMiddleware(logger));

function reducer(state, action) {
  switch (action.type) {
    case "FALL_ONE":
      return game.fallOneRow(state);
    case "ROTATE":
      var isClockwise = false;
      if (action.direction == "CLOCKWISE") isClockwise = true;

      return game.rotate(state, isClockwise);
    case "MOVE":
      return game.move(state, action.direction);
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
