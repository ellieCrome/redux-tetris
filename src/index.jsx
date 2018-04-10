import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import Shapes from "./components/Shapes";

let initialState = [
  new Shapes.O(1, 1),
  new Shapes.I(1, 4),
  new Shapes.T(1, 9),
  new Shapes.S(1, 13),
  new Shapes.Z(1, 17),
  new Shapes.L(1, 21),
  new Shapes.J(1, 25)
];

const store = createStore(reducer);

function reducer(state = initialState, action) {
  switch (action.type) {
    case "TICK":
      return [...state, new Shapes.O(action.data * 2, action.data * 2)];
    default:
      return state;
  }
}

var counter = 1;
setInterval(() => {
  store.dispatch({ type: "TICK", data: counter++ });
}, 1000);

render(
  <Provider store={store}>
    <App shapes={initialState} />
  </Provider>,
  document.getElementById("app")
);
