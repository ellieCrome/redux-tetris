import Shapes from "./Shapes";

class Piece {
  constructor(shape, offsetX = 5, offsetY = 0) {
    let randomIndex = Math.floor(Math.random() * 7);

    this.shape = Shapes[randomIndex];
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.rotation = "N";
  }

  points() {
    return this.shape.getRotatedPoints(this.rotation).map(point => {
      point.x += this.offsetX;
      point.y += this.offsetY;
      return point;
    });
  }
}

export default Piece;
