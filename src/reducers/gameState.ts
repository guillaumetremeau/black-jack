import { LOST, NEW_GAME, RESET_SCORE, WIN } from "../actions";

const DECK_NUMBER = 6;

export enum stateId {
    RUNNING,
    WAITING,
}
// -------------- CARD GAME ---------------
export enum cardValue {
    Ace,
    King,
    Queen,
    Jack,
    _10,
    _9,
    _8,
    _7,
    _6,
    _5,
    _4,
    _3,
    _2,
}
export enum cardColor {
    Clubs,
    Diamonds,
    Hearts,
    Spade,
}
export type card = {
    value: cardValue;
    color: cardColor;
};
const buildDeck = (amount: number = 6): card[] => {
    let cards: card[] = [];
    const values: cardValue[] = [
        cardValue.Ace,
        cardValue.King,
        cardValue.Queen,
        cardValue.Jack,
        cardValue._10,
        cardValue._9,
        cardValue._8,
        cardValue._7,
        cardValue._6,
        cardValue._5,
        cardValue._4,
        cardValue._3,
        cardValue._2,
    ];
    const colors: cardColor[] = [
        cardColor.Clubs,
        cardColor.Diamonds,
        cardColor.Hearts,
        cardColor.Spade,
    ];
    for (let index = 0; index < amount; index++) {
        colors.forEach((color) => {
            values.forEach((value) => {
                cards.push({
                    color: color,
                    value: value,
                });
            });
        });
    }
    return cards;
};
const shuffleDeck = (deck: card[]): card[] => {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
};
const deal = (gameState: gameState): gameState => {
    gameState.playerCards.push(gameState.deck.pop() as card);
    gameState.bankCards.push(gameState.deck.pop() as card);
    gameState.playerCards.push(gameState.deck.pop() as card);
    console.log(gameState);
    return gameState;
};
// ------------- END of Card Game -----------
export type gameState = {
    stateId: stateId;
    deck: card[];
    playerCards: card[];
    bankCards: card[];
};

const initialState: gameState = {
    stateId: stateId.WAITING,
    deck: shuffleDeck(buildDeck(DECK_NUMBER)),
    playerCards: [],
    bankCards: [],
};

const gameState = (state: gameState = initialState, action: any): gameState => {
    switch (action.type) {
        case WIN:
        case LOST:
            return {
                stateId: stateId.WAITING,
                deck: state.deck,
                playerCards: state.playerCards,
                bankCards: state.bankCards,
            };
        case NEW_GAME:
            let deck = state.deck;
            if (state.deck.length < DECK_NUMBER * 13) {
                // Cut card at 75%
                deck = shuffleDeck(buildDeck(DECK_NUMBER));
            }
            let gameState: gameState = {
                stateId: stateId.RUNNING,
                deck: deck,
                playerCards: [],
                bankCards: [],
            };
            // Deal first cards
            gameState = deal(gameState);
            return gameState;

        default:
            return state;
    }
};

export default gameState;
