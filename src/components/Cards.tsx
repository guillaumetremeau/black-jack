import { ConnectedProps } from "react-redux";
import { connector } from "../containers/Cards";
import "../resources/cards.css";
import { stateId } from "../reducers/gameState";

type Props = ConnectedProps<typeof connector>;

const Cards = (props: Props) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                justifyContent: "space-around",
                height: "100%",
                width: "100%",
            }}
        >
            <div></div>
            <Deck />
            <div></div>
        </div>
    );
};

export default Cards;

const Deck = () => {
    return (
        <div className="playingCards faceImages">
            <ul className="deck">
                <li>
                    <div className="card back">*</div>
                </li>
                <li>
                    <div className="card back">*</div>
                </li>
                <li>
                    <div className="card back">*</div>
                </li>
                <li>
                    <div className="card back">*</div>
                </li>
                <li>
                    <div className="card back">*</div>
                </li>
                <li>
                    <div className="card back">*</div>
                </li>
                <li>
                    <div className="card back">*</div>
                </li>
                <li>
                    <div className="card back">*</div>
                </li>
                <li>
                    <div className="card back">*</div>
                </li>
                <li>
                    <div className="card back">*</div>
                </li>
                <li>
                    <div className="card back">*</div>
                </li>
                <li>
                    <div className="card back">*</div>
                </li>
                <li>
                    <div className="card back">*</div>
                </li>
                <li>
                    <div className="card back">*</div>
                </li>
                <li>
                    <div className="card back">*</div>
                </li>
                <li>
                    <div className="card back">*</div>
                </li>
            </ul>
        </div>
    );
};
