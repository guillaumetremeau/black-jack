import { BLACKJACK, BUST, HIT, NEW_GAME, STAND } from "../actions";

const DECK_NUMBER = 6;

export enum stateId {
    RUNNING,
    WAITING,
    BUST,
    BLACKJACK,
    STAND,
}
// -------------- CARD GAME ---------------
export enum cardValue {
    Ace = "a",
    King = "k",
    Queen = "q",
    Jack = "j",
    _10 = 10,
    _9 = 9,
    _8 = 8,
    _7 = 7,
    _6 = 6,
    _5 = 5,
    _4 = 4,
    _3 = 3,
    _2 = 2,
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
// Deal immutable
const deal = (gameState: GameState, isPlayer: boolean): GameState => {
    if (isPlayer) {
        gameState.playerCards.push(gameState.deck.pop() as card);
    } else gameState.bankCards.push(gameState.deck.pop() as card);
    return {
        stateId: gameState.stateId,
        deck: [...gameState.deck],
        bankCards: [...gameState.bankCards],
        playerCards: [...gameState.playerCards],
    };
};
// ------------- END of Card Game -----------
export type GameState = {
    stateId: stateId;
    deck: card[];
    playerCards: card[];
    bankCards: card[];
};

const initialState: GameState = {
    stateId: stateId.WAITING,
    deck: shuffleDeck(buildDeck(DECK_NUMBER)),
    playerCards: [],
    bankCards: [],
};

const gameState = (state: GameState = initialState, action: any): GameState => {
    switch (action.type) {
        case NEW_GAME:
            let deck = state.deck;
            if (state.deck.length < DECK_NUMBER * 13) {
                // Cut card at 75%
                deck = shuffleDeck(buildDeck(DECK_NUMBER));
            }
            let gameState: GameState = {
                stateId: stateId.RUNNING,
                deck: deck,
                playerCards: [],
                bankCards: [],
            };
            // Deal first cards
            gameState = deal(gameState, true);
            gameState = deal(gameState, false);
            gameState = deal(gameState, true);
            return gameState;
        case HIT:
            return deal(state, true);
        case BUST:
            if (action.isPlayer) {
                return {
                    stateId: stateId.BUST,
                    deck: state.deck,
                    playerCards: state.playerCards,
                    bankCards: state.bankCards,
                };
            } else return state;
        case BLACKJACK:
            if (action.isPlayer) {
                return {
                    stateId: stateId.BLACKJACK,
                    deck: state.deck,
                    playerCards: state.playerCards,
                    bankCards: state.bankCards,
                };
            } else return state;
        case STAND:
            let newState = deal(state, false);
            newState.stateId = stateId.STAND;
            return newState;
        default:
            return state;
    }
};

export default gameState;
