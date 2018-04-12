import Piece from "../../models/Piece";
var GameHelper = {};

GameHelper.convertPieceToRubble = function(game) {
  game.rubble = game.rubble.concat(game.fallingPiece.points());
  game.rubble = this.checkForCompletedRows(game);

  if (!this.isGameOver(game)) {
    game.fallingPiece = new Piece();
  }

  return game;
};

GameHelper.fallingPieceOverlapsRubble = function(game) {
  return game.fallingPiece.points().some(p =>
    game.rubble.some(r => {
      return r.x == p.x && r.y == p.y;
    })
  );
};

GameHelper.isGameOver = function(game) {
  return game.rubble.some(r => {
    return r.y == 0;
  });
};

GameHelper.checkForCompletedRows = function(game) {
  var newGame = Object.assign({}, game);

  for (var y = 1; y < newGame.totalY; y++) {
    var squaresInRow = newGame.rubble.filter(square => {
      return square.y === y;
    });

    if (squaresInRow.length === newGame.totalX) {
      var allSquaresAboveCompletedRow = newGame.rubble;
      allSquaresAboveCompletedRow.filter(square => square.y < y);
      allSquaresAboveCompletedRow.forEach(square => (square.y += 1));
      newGame.rubble = allSquaresAboveCompletedRow;
    }
  }

  return newGame.rubble;
};

export default GameHelper;
