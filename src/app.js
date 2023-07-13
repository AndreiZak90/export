import Game, {
  readGameSaving as loadGame,
  writeGameSaving as saveGame,
  GameSavingData,
} from "./mode/game.js";

const game = new Game();
game.start();
