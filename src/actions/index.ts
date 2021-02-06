// ACTIONS
export const LOST = "LOST";
export const LOST_FAILED = "LOST_FAILED";
export const LOST_SUCCEEDED = "LOST_SUCCEEDED";
export const NEW_GAME = "NEW_GAME";
export const NEW_GAME_FAILED = "NEW_GAME_FAILED";
export const NEW_GAME_SUCCEEDED = "NEW_GAME_SUCCEEDED";
export const WIN = "WIN";
export const WIN_FAILED = "WIN_FAILED";
export const WIN_SUCCEEDED = "WIN_SUCCEEDED";

// 1. Lost a set
export const lost = () => {
  return {
    type: LOST,
  };
};
// 2. Start a new Game
export const newGame = () => {
  return {
    type: NEW_GAME,
  };
};
// 3. Win a set
export const win = () => {
  return {
    type: WIN,
  };
};
