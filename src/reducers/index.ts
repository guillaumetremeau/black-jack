import { combineReducers } from "redux";

import gameState from "./gameState";
import score from "./score";

import { GameState as gameStateI } from "./gameState";
import { score as scoreI } from "./score";

export interface RootState {
    gameState: gameStateI;
    score: scoreI;
}

export default combineReducers({
    gameState,
    score,
});
