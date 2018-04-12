export function fallOneRow(piece) {
  piece.offsetY++;
  return piece;
}

export function undoFallOneRow(piece) {
  piece.offsetY--;
  return piece;
}

export function move(piece, direction) {
  switch (direction) {
    case "LEFT":
      if (getMinX(piece) > 0) piece.offsetX -= 1;
      break;
    case "RIGHT":
      if (getMaxX(piece) < 14) piece.offsetX += 1;
      break;
    case "DOWN":
      if (getMaxY(piece) < 15) piece.offsetY += 1;
      break;
    default:
      break;
  }

  return piece;
}

export function undoMove(piece, direction) {
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
}

export function rotate(piece, isClockwise) {
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
}

export function getYs(piece) {
  return piece.points().map(point => point.y);
}

export function getXs(piece) {
  return piece.points().map(point => point.x);
}

export function getMaxY(piece) {
  return Math.max.apply(Math, getYs(piece));
}

export function getMinX(piece) {
  return Math.min.apply(Math, getXs(piece));
}

export function getMaxX(piece) {
  return Math.max.apply(Math, getXs(piece));
}
