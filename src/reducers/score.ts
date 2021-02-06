import { LOST_SUCCEEDED, NEW_GAME_SUCCEEDED, WIN_SUCCEEDED } from "../actions";

export type score = {
    wins: number;
    loses: number;
};

const initialState: score = {
    wins: 0,
    loses: 0,
};

const score = (state: score = initialState, action: any): score => {
    switch (action.type) {
        case LOST_SUCCEEDED:
            return {
                wins: state.wins,
                loses: state.loses++,
            };
        case NEW_GAME_SUCCEEDED:
            return {
                wins: 0,
                loses: 0,
            };
        case WIN_SUCCEEDED:
            return {
                wins: state.wins++,
                loses: state.loses,
            };
        default:
            return state;
    }
};

export default score;
