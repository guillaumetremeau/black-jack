import { connect } from "react-redux";
import Cards from "../components/Cards";
import { RootState } from "../reducers";

const mapStateToProps = (state: RootState) => {
    return {
        gameState: state.gameState.stateId,
        playerCards: state.gameState.playerCards,
        bankCards: state.gameState.bankCards,
    };
};

export const connector = connect(mapStateToProps);

export default connector(Cards);
