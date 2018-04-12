import Piece from "../../models/Piece";
var GameHelper = {};

GameHelper.convertPieceToRubble = function(game) {
  game.rubble = game.rubble.concat(game.fallingPiece.points());
  game.fallingPiece = new Piece();
  return game;
};

GameHelper.fallingPieceOverlapsRubble = function(game) {
  return game.fallingPiece.points().some(p =>
    game.rubble.some(r => {
      return r.x == p.x && r.y == p.y;
    })
  );
};

export default GameHelper;
