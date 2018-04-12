export function convertPieceToRubble(game) {
  game.rubble = game.rubble.concat(game.fallingPiece.points());
  return game;
}

export function fallingPieceOverlapsRubble(game) {
  return game.fallingPiece.points().some(p =>
    game.rubble.some(r => {
      return r.x == p.x && r.y == p.y;
    })
  );
}
