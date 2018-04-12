import Piece from "./Piece";

class Game {
  generate() {
    return {
      totalX: 20,
      totalY: 15,
      rubble: [],
      fallingPiece: new Piece()
    };
  }
}

export default Game;
