class Piece {
  constructor(shape, offsetX = 5, offsetY = 0) {
    this.shape = shape;
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
  rotate(isClockwise) {
    let clockwiseRotations = ["N", "E", "S", "W"];

    let currentIndex = clockwiseRotations.findIndex(item => {
      return this.rotation == item;
    });

    let maxIndex = clockwiseRotations.length - 1;
    let rotatedIndex;
    if (isClockwise) {
      rotatedIndex = currentIndex < maxIndex ? currentIndex + 1 : 0; //add 1, if at end index=0
    } else {
      rotatedIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex; //remove 1, if at beginning index=max
    }

    this.rotation = clockwiseRotations[rotatedIndex];
  }
}

export default Piece;
