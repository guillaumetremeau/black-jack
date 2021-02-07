import { ConnectedProps } from "react-redux";
import { connector } from "../containers/Actions";
import { stateId } from "../reducers/gameState";

type Props = ConnectedProps<typeof connector>;

const Actions = (props: Props) => {
    if (props.stateId === stateId.WAITING) {
        return (
            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        props.onSubmit();
                    }}
                >
                    <button id="newGame" type="submit">
                        New Game
                    </button>
                </form>
            </div>
        );
    } else return <div></div>;
};

export default Actions;
