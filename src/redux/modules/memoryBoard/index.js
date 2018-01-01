import {
  union,
  get
} from 'lodash';

const prefix = 'memoryBoard';
const RESET_BOARD = `${prefix}/RESET_BOARD`;
const TURN_CARD = `${prefix}/TURN_CARD`;
const MARK_CARDS_FOUND = `${prefix}/MARK_CARDS_FOUND`;
const UNTURN_CARDS = `${prefix}/UNTURN_CARDS`;
const FREEZE_BOARD = `${prefix}/FREEZE_BOARD`;
const UNFREEZE_BOARD = `${prefix}/UNFREEZE_BOARD`;

const initialState = {
  boardSize: 16,
  cards: [],
  turnedCards: [],
  foundCards: [],
  boardFrozen: false,
};

// helper functions

const canTurnCard = (state, cardId) => {
  if (state.turnedCards.length > 1) {
    return false;
  } else if (state.turnedCards.includes(cardId)) {
    return false;
  } else if (state.foundCards.includes(cardId)) {
    return false;
  }

  return true;
}

const checkMatchFound = (cards, turnedCards) => {
  const card1ItemId = get(cards[turnedCards[0]], 'itemId', null);
  const card2ItemId = get(cards[turnedCards[1]], 'itemId', null);

  if (!card1ItemId || !card2ItemId) {
    return false
  }

  return (card1ItemId === card2ItemId);
}

// actions
export const resetBoard = (cards) => {
  return {
    type: RESET_BOARD,
    cards,
  }
};

export const freezeBoard = () => {
  return (dispatch, getState) => {
    const {
      turnedCards,
      cards,
      boardFrozen,
    } = getState().memoryBoard;

    if (boardFrozen) {
      return
    };

    dispatch({
      type: FREEZE_BOARD,
    });

    if (checkMatchFound(cards, turnedCards)) {
      setTimeout(() => {
        dispatch(markCardsFound(turnedCards[0], turnedCards[1]));
        dispatch(unfreezeBoard());
      }, 400);
    } else {
      setTimeout(() => {
        dispatch(unturnCards());
        dispatch(unfreezeBoard());
      }, 800);
    }
  }
};

export const unfreezeBoard = () => {
  return {
    type: UNFREEZE_BOARD,
  }
};

export const markCardsFound = (card1Id, card2Id) => {
  return {
    type: MARK_CARDS_FOUND,
    card1Id,
    card2Id,
  }
};

export const unturnCards = () => {
  return {
    type: UNTURN_CARDS,
  }
};

export const turnCard = (cardId) => {
  return (dispatch, getState) => {
    dispatch({
      type: TURN_CARD,
      cardId,
    });

    const {
      turnedCards
    } = getState().memoryBoard;

    if (turnedCards.length === 2) {
      dispatch(freezeBoard());
    }
  }
};


// reducer
const memoryBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_BOARD:
      return {
        ...initialState,
        cards: action.cards,
      };

    case TURN_CARD:
      if (!canTurnCard(state, action.cardId)) {
        return state;
      }
      return {
        ...state,
        turnedCards: union(
          state.turnedCards, [action.cardId]
        ),
      };

    case MARK_CARDS_FOUND:
      return {
        ...state,
        turnedCards: initialState.turnedCards,
        foundCards: union(
          state.foundCards, [action.card1Id, action.card2Id]
        ),
      };

    case UNTURN_CARDS:
      return {
        ...state,
        turnedCards: [],
      };

    case FREEZE_BOARD:
      return {
        ...state,
        boardFrozen: true,
      };

    case UNFREEZE_BOARD:
      return {
        ...state,
        boardFrozen: false,
      };

    default:
      return state;
  }
};

export default memoryBoardReducer;