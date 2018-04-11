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
    case "ROTATE_CLOCKWISE":
      return game.rotate(state, true);
    case "ROTATE_ANTICLOCKWISE":
      return game.rotate(state, false);
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
