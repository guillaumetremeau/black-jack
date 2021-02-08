import { connect } from "react-redux";
import { hit, newGame, stand } from "../actions";
import Actions from "../components/Actions";
import { RootState } from "../reducers";

const mapStateToProps = (state: RootState) => {
    return {
        stateId: state.gameState.stateId,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        newGame: () => {
            dispatch(newGame());
        },
        hit: () => {
            dispatch(hit());
        },
        stand: () => {
            dispatch(stand());
        },
    };
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Actions);
