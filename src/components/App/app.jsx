import React, { Component } from "react";
import Shapes from "../Shapes";
import Square from "../Square";

var data = [
  new Shapes.O(1, 1),
  new Shapes.I(1, 4),
  new Shapes.T(1, 9),
  new Shapes.S(1, 13),
  new Shapes.Z(1, 17),
  new Shapes.L(1, 21),
  new Shapes.J(1, 25)
];

class App extends Component {
  render() {
    return (
      <div>
        {data.map(shape =>
          shape
            .squares()
            .map(sq => <Square key={data.index} row={sq.row} col={sq.col} />)
        )}
      </div>
    );
  }
}

export default App;
