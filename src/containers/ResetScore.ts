import { connect } from "react-redux";
import { newGame } from "../actions";
import ResetScore from "../components/ResetScore";

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSubmit: () => {
            dispatch(newGame());
        },
    };
};

export const connector = connect(mapDispatchToProps);

export default connector(ResetScore);
