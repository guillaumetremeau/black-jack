import { connect } from "react-redux";
import Score from "../components/Score";
import { RootState } from "../reducers";

const mapStateToProps = (state: RootState) => {
    return {
        wins: state.score.wins,
        loses: state.score.loses,
    };
};

export const connector = connect(mapStateToProps);

export default connector(Score);
