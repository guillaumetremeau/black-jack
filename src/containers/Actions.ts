import { connect } from "react-redux";
import { newGame } from "../actions";
import Actions from "../components/Actions";
import { RootState } from "../reducers";

const mapStateToProps = (state: RootState) => {
    return {
        stateId: state.gameState.stateId,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSubmit: () => {
            dispatch(newGame());
        },
    };
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Actions);
