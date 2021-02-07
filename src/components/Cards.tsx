import { ConnectedProps } from "react-redux";
import { connector } from "../containers/Cards";
import "../resources/cards.css";
import { card, cardColor, cardValue } from "../reducers/gameState";

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
            <Table cards={props.bankCards} />
            <Deck />
            <Table cards={props.playerCards} />
        </div>
    );
};

export default Cards;

const Table = (props: { cards: card[] }) => {
    return (
        <div className="playingCards faceImages">
            <ul className="table">
                {props.cards.map((card) => (
                    <li>
                        <Card color={card.color} value={card.value} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
const Card = (props: { color: cardColor; value: cardValue }) => {
    let rank = "";
    let suit = "";
    let suitSpan = "";
    switch (props.color) {
        case cardColor.Clubs:
            suit = "clubs";
            suitSpan = "♣";
            break;
        case cardColor.Diamonds:
            suit = "diams";
            suitSpan = "♦";
            break;
        case cardColor.Hearts:
            suit = "hearts";
            suitSpan = "♥";
            break;
        case cardColor.Spade:
            suit = "spades";
            suitSpan = "♠";
            break;
    }
    switch (props.value) {
        case cardValue.Ace:
            rank = "a";
            break;
        case cardValue.King:
            rank = "k";
            break;
        case cardValue.Queen:
            rank = "q";
            break;
        case cardValue.Jack:
            rank = "j";
            break;
        case cardValue._10:
            rank = "10";
            break;
        case cardValue._9:
            rank = "9";
            break;
        case cardValue._8:
            rank = "8";
            break;
        case cardValue._7:
            rank = "7";
            break;
        case cardValue._6:
            rank = "6";
            break;
        case cardValue._5:
            rank = "5";
            break;
        case cardValue._4:
            rank = "4";
            break;
        case cardValue._3:
            rank = "3";
            break;
        case cardValue._2:
            rank = "2";
            break;
    }
    return (
        <div className={`card rank-${rank} ${suit}`}>
            <span className="rank">{rank.toLocaleUpperCase()}</span>
            <span className="suit">{suitSpan}</span>
        </div>
    );
};
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
