// ACTIONS
export const BLACKJACK = "BLACKJACK";
export const BUST = "BUST";
export const HIT = "HIT";
export const NEW_GAME = "NEW_GAME";
export const RESET_SCORE = "RESET_SCORE";
export const STAND = "STAND";

// 1. Bust from player or
export const bust = (isPlayer: boolean) => {
    return {
        type: BUST,
        isPlayer: isPlayer,
    };
};
// 2. Start a new Game
export const newGame = () => {
    return {
        type: NEW_GAME,
    };
};
// 3. Win a set
export const blackjack = (isPlayer: boolean) => {
    return {
        type: BLACKJACK,
        isPlayer: isPlayer,
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
