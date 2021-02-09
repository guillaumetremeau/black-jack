import { ConnectedProps } from "react-redux";
import { connector } from "../containers/ResetScore";

type Props = ConnectedProps<typeof connector>;

const ResetScore = (props: Props) => {
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    props.onSubmit();
                }}
            >
                <button className="button" id="resetScore" type="submit">
                    Reset score
                </button>
            </form>
        </div>
    );
};

export default ResetScore;
