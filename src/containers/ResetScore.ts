import { connect } from "react-redux";
import { resetScore } from "../actions";
import ResetScore from "../components/ResetScore";
import { RootState } from "../reducers";

const mapStateToProps = (state: RootState) => {
    return {};
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSubmit: () => {
            dispatch(resetScore());
        },
    };
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ResetScore);
