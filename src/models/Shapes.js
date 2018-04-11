class Shape {
  constructor(type, positions) {
    this.type = type;
    this.positions = positions;
  }
  getRotatedPoints(rotation) {
    return this.positions(rotation);
  }
}

let point = (x, y) => {
  return { x: x, y: y };
};

const oPositions = () => [point(0, 0), point(0, 1), point(1, 0), point(1, 1)];

const iPositions = rotation => {
  switch (rotation) {
    case "N":
      return [point(0, -2), point(0, -1), point(0, 0), point(0, 1)];
    case "E":
      return [point(-2, 0), point(-1, 0), point(0, 0), point(1, 0)];
    case "S":
      return [point(-1, -2), point(-1, -1), point(-1, 0), point(-1, 1)];
    case "W":
      return [point(-2, -1), point(-1, -1), point(0, -1), point(1, -1)];
  }
};

const tPositions = rotation => {
  switch (rotation) {
    case "N":
      return [point(0, -1), point(0, 0), point(0, 1), point(1, 0)];
    case "E":
      return [point(-1, 0), point(0, 0), point(1, 0), point(0, 1)];
    case "S":
      return [point(0, -1), point(0, 0), point(0, 1), point(-1, 0)];
    case "W":
      return [point(-1, 0), point(0, 0), point(1, 0), point(0, -1)];
  }
};

const lPositions = rotation => {
  switch (rotation) {
    case "N":
      return [point(0, -1), point(0, 0), point(0, 1), point(1, 1)];
    case "E":
      return [point(-1, 0), point(0, 0), point(1, 0), point(-1, 1)];
    case "S":
      return [point(0, -1), point(0, 0), point(0, 1), point(-1, -1)];
    case "W":
      return [point(-1, 0), point(0, 0), point(1, 0), point(-1, -1)];
  }
};

const jPositions = rotation => {
  switch (rotation) {
    case "N":
      return [point(0, -1), point(0, 0), point(0, 1), point(-1, 1)];
    case "E":
      return [point(-1, 0), point(0, 0), point(1, 0), point(-1, -1)];
    case "S":
      return [point(0, -1), point(0, 0), point(0, 1), point(1, -1)];
    case "W":
      return [point(-1, 0), point(0, 0), point(1, 0), point(1, 1)];
  }
};

const zPositions = rotation => {
  switch (rotation) {
    case "N":
      return [point(0, -1), point(0, 0), point(1, 0), point(1, 1)];
    case "E":
      return [point(-1, 1), point(0, 0), point(1, 0), point(0, 1)];
    case "S":
      return [point(-1, -1), point(-1, 0), point(0, 0), point(0, 1)];
    case "W":
      return [point(-1, 0), point(0, -1), point(1, -1), point(0, 0)];
  }
};

const sPositions = rotation => {
  switch (rotation) {
    case "N":
      return [point(0, 0), point(0, 1), point(1, -1), point(1, 0)];
    case "E":
      return [point(0, 0), point(0, 1), point(1, 1), point(-1, 0)];
    case "S":
      return [point(-1, 0), point(-1, 1), point(0, -1), point(0, 0)];
    case "W":
      return [point(0, -1), point(0, 0), point(1, 0), point(-1, -1)];
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
