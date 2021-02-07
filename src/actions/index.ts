// ACTIONS
export const HIT = "HIT";
export const LOST = "LOST";
export const NEW_GAME = "NEW_GAME";
export const RESET_SCORE = "RESET_SCORE";
export const STAND = "STAND";
export const WIN = "WIN";

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
// 4. ResetScore
export const resetScore = () => {
    return {
        type: RESET_SCORE,
    };
};
// 5. Hit new card
export const hit = () => {
    return {
        type: HIT,
    };
};
// 6. Stand game
export const stand = () => {
    return {
        type: STAND,
    };
};
