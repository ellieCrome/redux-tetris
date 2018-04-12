class Shape {
  constructor(type, positions) {
    this.type = type;
    this.positions = positions;
  }
  getRotatedPoints(rotation) {
    return this.positions(rotation);
  }
}

let point = (x, y, colour) => {
  return { x: x, y: y, colour: colour };
};

const oPositions = () => [
  point(0, 0, "yellow"),
  point(0, 1, "yellow"),
  point(1, 0, "yellow"),
  point(1, 1, "yellow")
];

const iPositions = rotation => {
  switch (rotation) {
    case "N":
      return [
        point(0, -2, "light-blue"),
        point(0, -1, "light-blue"),
        point(0, 0, "light-blue"),
        point(0, 1, "light-blue")
      ];
    case "E":
      return [
        point(-2, 0, "light-blue"),
        point(-1, 0, "light-blue"),
        point(0, 0, "light-blue"),
        point(1, 0, "light-blue")
      ];
    case "S":
      return [
        point(-1, -2, "light-blue"),
        point(-1, -1, "light-blue"),
        point(-1, 0, "light-blue"),
        point(-1, 1, "light-blue")
      ];
    case "W":
      return [
        point(-2, -1, "light-blue"),
        point(-1, -1, "light-blue"),
        point(0, -1, "light-blue"),
        point(1, -1, "light-blue")
      ];
  }
};

const tPositions = rotation => {
  switch (rotation) {
    case "N":
      return [
        point(0, -1, "purple"),
        point(0, 0, "purple"),
        point(0, 1, "purple"),
        point(1, 0, "purple")
      ];
    case "E":
      return [
        point(-1, 0, "purple"),
        point(0, 0, "purple"),
        point(1, 0, "purple"),
        point(0, 1, "purple")
      ];
    case "S":
      return [
        point(0, -1, "purple"),
        point(0, 0, "purple"),
        point(0, 1, "purple"),
        point(-1, 0, "purple")
      ];
    case "W":
      return [
        point(-1, 0, "purple"),
        point(0, 0, "purple"),
        point(1, 0, "purple"),
        point(0, -1, "purple")
      ];
  }
};

const lPositions = rotation => {
  switch (rotation) {
    case "N":
      return [
        point(0, -1, "orange"),
        point(0, 0, "orange"),
        point(0, 1, "orange"),
        point(1, 1, "orange")
      ];
    case "E":
      return [
        point(-1, 0, "orange"),
        point(0, 0, "orange"),
        point(1, 0, "orange"),
        point(-1, 1, "orange")
      ];
    case "S":
      return [
        point(0, -1, "orange"),
        point(0, 0, "orange"),
        point(0, 1, "orange"),
        point(-1, -1, "orange")
      ];
    case "W":
      return [
        point(-1, 0, "orange"),
        point(0, 0, "orange"),
        point(1, 0, "orange"),
        point(-1, -1, "orange")
      ];
  }
};

const jPositions = rotation => {
  switch (rotation) {
    case "N":
      return [
        point(0, -1, "blue"),
        point(0, 0, "blue"),
        point(0, 1, "blue"),
        point(-1, 1, "blue")
      ];
    case "E":
      return [
        point(-1, 0, "blue"),
        point(0, 0, "blue"),
        point(1, 0, "blue"),
        point(-1, -1, "blue")
      ];
    case "S":
      return [
        point(0, -1, "blue"),
        point(0, 0, "blue"),
        point(0, 1, "blue"),
        point(1, -1, "blue")
      ];
    case "W":
      return [
        point(-1, 0, "blue"),
        point(0, 0, "blue"),
        point(1, 0, "blue"),
        point(1, 1, "blue")
      ];
  }
};

const zPositions = rotation => {
  switch (rotation) {
    case "N":
      return [
        point(0, -1, "red"),
        point(0, 0, "red"),
        point(1, 0, "red"),
        point(1, 1, "red")
      ];
    case "E":
      return [
        point(-1, 1, "red"),
        point(0, 0, "red"),
        point(1, 0, "red"),
        point(0, 1, "red")
      ];
    case "S":
      return [
        point(-1, -1, "red"),
        point(-1, 0, "red"),
        point(0, 0, "red"),
        point(0, 1, "red")
      ];
    case "W":
      return [
        point(-1, 0, "red"),
        point(0, -1, "red"),
        point(1, -1, "red"),
        point(0, 0, "red")
      ];
  }
};

const sPositions = rotation => {
  switch (rotation) {
    case "N":
      return [
        point(0, 0, "green"),
        point(0, 1, "green"),
        point(1, -1, "green"),
        point(1, 0, "green")
      ];
    case "E":
      return [
        point(0, 0, "green"),
        point(0, 1, "green"),
        point(1, 1, "green"),
        point(-1, 0, "green")
      ];
    case "S":
      return [
        point(-1, 0, "green"),
        point(-1, 1, "green"),
        point(0, -1, "green"),
        point(0, 0, "green")
      ];
    case "W":
      return [
        point(0, -1, "green"),
        point(0, 0, "green"),
        point(1, 0, "green"),
        point(-1, -1, "green")
      ];
  }
};

const shapes = [
  new Shape("O", oPositions),
  new Shape("I", iPositions),
  new Shape("T", tPositions),
  new Shape("L", lPositions),
  new Shape("J", jPositions),
  new Shape("Z", zPositions),
  new Shape("S", sPositions)
];

export default shapes;
