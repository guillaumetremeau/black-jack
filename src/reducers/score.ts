import { BUST, RESET_SCORE } from "../actions";

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
        case RESET_SCORE:
            return {
                wins: 0,
                loses: 0,
            };
        case BUST:
            if (action.isPlayer) {
                return {
                    wins: state.wins,
                    loses: state.loses + 1,
                };
            } else {
                return {
                    wins: state.wins + 1,
                    loses: state.loses,
                };
            }
        default:
            return state;
    }
};

export default score;
