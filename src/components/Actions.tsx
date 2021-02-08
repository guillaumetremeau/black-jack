import { ConnectedProps } from "react-redux";
import { connector } from "../containers/Actions";
import { stateId } from "../reducers/gameState";

type Props = ConnectedProps<typeof connector>;

const Actions = (props: Props) => {
    if (props.stateId === stateId.WAITING || props.stateId === stateId.BUST) {
        let message = <></>;
        if (props.stateId === stateId.BUST) message = <span>Bust!</span>;
        return (
            <div>
                {message}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        props.newGame();
                    }}
                >
                    <button id="newGame" type="submit">
                        New Game
                    </button>
                </form>
            </div>
        );
    } else if (props.stateId === stateId.BLACKJACK) {
        return (
            <div>
                <span>Blackjack!</span>
            </div>
        );
    } else if (props.stateId === stateId.STAND) {
        return (
            <div>
                <span>Standing</span>
            </div>
        );
    } else
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "row",
                    height: "100%",
                    width: "100%",
                }}
            >
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        props.hit();
                    }}
                >
                    <button id="newGame" type="submit">
                        Hit
                    </button>
                </form>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        props.stand();
                    }}
                >
                    <button id="newGame" type="submit">
                        Stand
                    </button>
                </form>
            </div>
        );
};

export default Actions;
