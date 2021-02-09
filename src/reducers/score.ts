import { BLACKJACK, BUST, OVER, RESET_SCORE } from "../actions";

export type score = {
    wins: number;
    loses: number;
    playerScore: number | "BLACKJACK";
};

const initialState: score = {
    wins: 0,
    loses: 0,
    playerScore: 0,
};

const score = (state: score = initialState, action: any): score => {
    switch (action.type) {
        case RESET_SCORE:
            return {
                wins: 0,
                loses: 0,
                playerScore: 0,
            };
        case BUST:
            if (action.isPlayer) {
                return {
                    wins: state.wins,
                    loses: state.loses + 1,
                    playerScore: 0,
                };
            } else {
                return {
                    wins: state.wins + 1,
                    loses: state.loses,
                    playerScore: 0,
                };
            }
        case BLACKJACK:
            if (action.isPlayer) {
                return {
                    wins: state.wins,
                    loses: state.loses,
                    playerScore: "BLACKJACK",
                };
            } else {
                if (state.playerScore === "BLACKJACK") {
                    return {
                        wins: state.wins,
                        loses: state.loses,
                        playerScore: 0,
                    };
                } else {
                    return {
                        wins: state.wins,
                        loses: state.loses + 1,
                        playerScore: 0,
                    };
                }
            }
        case OVER:
            if (state.playerScore > action.score) {
                return {
                    wins: state.wins + 1,
                    loses: state.loses,
                    playerScore: 0,
                };
            } else if (state.playerScore === action.score) {
                return {
                    wins: state.wins,
                    loses: state.loses,
                    playerScore: 0,
                };
            } else
                return {
                    wins: state.wins,
                    loses: state.loses + 1,
                    playerScore: 0,
                };
        default:
            return state;
    }
};

export default score;
