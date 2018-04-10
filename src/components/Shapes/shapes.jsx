class SmallSquare {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
}

class O {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  squares() {
    return [
      new SmallSquare(this.row, this.col),
      new SmallSquare(this.row, this.col + 1),
      new SmallSquare(this.row + 1, this.col),
      new SmallSquare(this.row + 1, this.col + 1)
    ];
  }
}

class I {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  squares() {
    return [
      new SmallSquare(this.row, this.col),
      new SmallSquare(this.row, this.col + 1),
      new SmallSquare(this.row, this.col + 2),
      new SmallSquare(this.row, this.col + 3)
    ];
  }
}

class T {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  squares() {
    return [
      new SmallSquare(this.row, this.col),
      new SmallSquare(this.row, this.col + 1),
      new SmallSquare(this.row, this.col + 2),
      new SmallSquare(this.row + 1, this.col + 1)
    ];
  }
}

class S {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  squares() {
    return [
      new SmallSquare(this.row, this.col + 1),
      new SmallSquare(this.row, this.col + 2),
      new SmallSquare(this.row + 1, this.col),
      new SmallSquare(this.row + 1, this.col + 1)
    ];
  }
}

class Z {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  squares() {
    return [
      new SmallSquare(this.row, this.col),
      new SmallSquare(this.row, this.col + 1),
      new SmallSquare(this.row + 1, this.col + 1),
      new SmallSquare(this.row + 1, this.col + 2)
    ];
  }
}

class L {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  squares() {
    return [
      new SmallSquare(this.row, this.col),
      new SmallSquare(this.row, this.col + 1),
      new SmallSquare(this.row, this.col + 2),
      new SmallSquare(this.row + 1, this.col)
    ];
  }
}

class J {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  squares() {
    return [
      new SmallSquare(this.row, this.col),
      new SmallSquare(this.row, this.col + 1),
      new SmallSquare(this.row, this.col + 2),
      new SmallSquare(this.row + 1, this.col + 2)
    ];
  }
}

export default { O, I, T, S, Z, L, J };
