import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Game from "./models/Game";
import GameView from "./components/GameView";
import { pieceReducer } from "./reducers/pieceReducer";

const game = new Game();
const initialState = game.generate();
const store = createStore(pieceReducer, initialState);

render(
  <Provider store={store}>
    <GameView />
  </Provider>,
  document.getElementById("app")
);
