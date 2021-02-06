import { combineReducers } from "redux";

import score from "./score";

import { score as scoreI } from "./score";

export interface RootState {
    score: scoreI;
}

export default combineReducers({
    score,
});
