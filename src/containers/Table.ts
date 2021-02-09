import { connect } from "react-redux";
import { blackjack, bust, over, stand } from "../actions";
import Table from "../components/Table";
import { RootState } from "../reducers";

const mapStateToProps = (state: RootState, ownProps: { isPlayer: boolean }) => {
    if (ownProps.isPlayer) {
        return {
            cards: state.gameState.playerCards,
            isPlayer: ownProps.isPlayer,
        };
    } else {
        return {
            cards: state.gameState.bankCards,
            isPlayer: ownProps.isPlayer,
        };
    }
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        bust: (isPlayer: boolean) => {
            dispatch(bust(isPlayer));
        },
        blackjack: (isPlayer: boolean) => {
            dispatch(blackjack(isPlayer));
        },
        stand: () => {
            dispatch(stand());
        },
        over: (score: number) => {
            dispatch(over(score));
        },
    };
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Table);
