import { ConnectedProps } from "react-redux";
import { connector } from "../containers/Cards";
import "../resources/cards.css";
import Table from "../containers/Table";
import React from "react";

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
            <Table isPlayer={false} />
            <Deck />
            <Table isPlayer />
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
                    <div id="lastCard" className="card back">
                        *
                    </div>
                </li>
            </ul>
        </div>
    );
};
