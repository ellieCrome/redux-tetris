var PieceHelper = {};

PieceHelper.fallOneRow = function(piece) {
  piece.offsetY++;
  return piece;
};

PieceHelper.undoFallOneRow = function(piece) {
  piece.offsetY--;
  return piece;
};

PieceHelper.move = function(piece, direction) {
  switch (direction) {
    case "LEFT":
      if (this.getMinX(piece) > 0) piece.offsetX -= 1;
      break;
    case "RIGHT":
      if (this.getMaxX(piece) < 14) piece.offsetX += 1;
      break;
    case "DOWN":
      if (this.getMaxY(piece) < 15) piece.offsetY += 1;
      break;
    default:
      break;
  }

  return piece;
};

PieceHelper.undoMove = function(piece, direction) {
  switch (direction) {
    case "LEFT":
      piece.offsetX += 1;
      break;
    case "RIGHT":
      piece.offsetX -= 1;
      break;
    case "DOWN":
      piece.offsetY -= 1;
      break;
    default:
      break;
  }

  return piece;
};

PieceHelper.rotate = function(piece, isClockwise) {
  let clockwiseRotations = ["N", "E", "S", "W"];

  let currentIndex = clockwiseRotations.findIndex(item => {
    return piece.rotation == item;
  });

  let maxIndex = clockwiseRotations.length - 1;
  let rotatedIndex;
  if (isClockwise) {
    rotatedIndex = currentIndex < maxIndex ? currentIndex + 1 : 0; //add 1, if at end index=0
  } else {
    rotatedIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex; //remove 1, if at beginning index=max
  }

  piece.rotation = clockwiseRotations[rotatedIndex];

  return piece;
};

PieceHelper.getYs = function(piece) {
  return piece.points().map(point => point.y);
};

PieceHelper.getXs = function(piece) {
  return piece.points().map(point => point.x);
};

PieceHelper.getMaxY = function(piece) {
  return Math.max.apply(Math, this.getYs(piece));
};

PieceHelper.getMinX = function(piece) {
  return Math.min.apply(Math, this.getXs(piece));
};

PieceHelper.getMaxX = function(piece) {
  return Math.max.apply(Math, this.getXs(piece));
};

export default PieceHelper;
