import { LOST, RESET_SCORE, WIN } from "../actions";

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
        case LOST:
            return {
                wins: state.wins,
                loses: state.loses++,
            };
        case RESET_SCORE:
            return {
                wins: 0,
                loses: 0,
            };
        case WIN:
            return {
                wins: state.wins++,
                loses: state.loses,
            };
        default:
            return state;
    }
};

export default score;
