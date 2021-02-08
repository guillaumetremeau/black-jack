import React from "react";
import { card, cardColor, cardValue } from "../reducers/gameState";
import "./Table.css";

//type Props = ConnectedProps<typeof connector>;
interface Props {
    cards: card[];
    isPlayer: boolean;
    bust: (isPLayer: boolean) => void;
    blackjack: (isPLayer: boolean) => void;
    stand: () => void;
}
class Table extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.score = 0;
    }
    private score: number;
    componentDidUpdate() {
        // Place card on top of the deck dynamically
        let targetPos = findPos(document.getElementById("lastCard"));
        let cards = document.getElementsByClassName("wrapper");
        for (let index = 0; index < cards.length; index++) {
            let currentPos = findPos(cards[index] as HTMLElement);

            (cards[index] as HTMLElement).style.setProperty(
                "top",
                `${targetPos[1] - currentPos[1]}px`
            );
            (cards[index] as HTMLElement).style.setProperty(
                "left",
                `${targetPos[0] - currentPos[0]}px`
            );
            (cards[index] as HTMLElement).style.setProperty(
                "visibility",
                "visible"
            );
            setTimeout(() => {
                (cards[index] as HTMLElement).classList.add("finalPlace");
            }, 1);
        }

        // Calculate amount and bust if necessary or stop if bank and >= 17
        let sum = [0];
        this.props.cards.map((card) => {
            switch (card.value) {
                case cardValue.Jack:
                case cardValue.King:
                case cardValue.Queen:
                    sum.map((total, index) => (sum[index] = total + 10));
                    break;
                case cardValue.Ace:
                    sum.map((total, index) => {
                        sum[index] = total + 11;
                        // will store in increasing order
                        sum.unshift(total + 1);
                    });
                    break;
                default:
                    let value: number = card.value;
                    sum.map((total, index) => (sum[index] = total + value));
                    break;
            }
        });
        let score = sum[0];
        sum.map((total) => {
            if (total > score && total <= 21) score = total;
        });
        this.score = score;
        if (this.score === 21 && this.props.cards.length === 2)
            this.props.blackjack(this.props.isPlayer);
        if (this.score > 21) this.props.bust(this.props.isPlayer);
        if (
            !this.props.isPlayer &&
            this.props.cards.length > 1 &&
            this.score < 17
        ) {
            setTimeout(this.props.stand, 1000);
        }
    }
    render() {
        let count = 0;
        return (
            <div style={{ height: "28vh" }} className="playingCards">
                <ul className="table">
                    {this.props.cards.map((card) => {
                        count++;
                        return (
                            <li key={count} className="wrapper">
                                <Card color={card.color} value={card.value} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
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

export default Table;

function findPos(obj: any) {
    let curleft = 0;
    let curtop = 0;
    if (obj.offsetParent) {
        curleft = obj.offsetLeft;
        curtop = obj.offsetTop;
        while ((obj = obj.offsetParent)) {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        }
    }
    return [curleft, curtop];
}
/*function isOverflown(element: any) {
    return (
        element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth
    );
}
*/
