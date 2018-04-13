import Piece from "./Piece";

class Game {
  generate() {
    return {
      totalX: 15,
      totalY: 20,
      rubble: [],
      fallingPiece: new Piece(),
      isGameOver: false,
      isPaused: false
    };
  }
}

export default Game;
