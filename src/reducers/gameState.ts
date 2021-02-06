import { LOST_SUCCEEDED, NEW_GAME_SUCCEEDED, WIN_SUCCEEDED } from "../actions";

export enum stateId {
    RUNNING,
    WAITING,
}

export type gameState = {
    stateId: stateId;
};

const initialState: gameState = {
    stateId: stateId.WAITING,
};

const gameState = (state: gameState = initialState, action: any): gameState => {
    switch (action.type) {
        case WIN_SUCCEEDED:
        case LOST_SUCCEEDED:
            return {
                stateId: stateId.WAITING,
            };
        case NEW_GAME_SUCCEEDED:
            return {
                stateId: stateId.RUNNING,
            };
        default:
            return state;
    }
};

export default gameState;
