import { connect } from "react-redux";
import MemoryGame from "../../components/organisms/MemoryGame";
import { getRandomBirds } from "../../redux/modules/birds/selectors.js";
import {
  getBoard,
  getTurnedCards,
  getFoundCards,
} from "../../redux/modules/memoryBoard/selectors.js";
import {
  resetBoard,
  turnCard,
  markCardsFound,
  unturnCards
} from "../../redux/modules/memoryBoard";

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    getRandomCards: getRandomBirds(state.birds),
    board: getBoard(state.memoryBoard),
    turnedCards: getTurnedCards(state.memoryBoard),
    foundCards: getFoundCards(state.memoryBoard),
    silhouette: false,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetBoard: cards => dispatch(resetBoard(cards)),
    turnCard: cardId => dispatch(turnCard(cardId)),
    markCardsFound: (cardsId1, cardsId2) => dispatch(cardsId1, cardsId2),
    unturnCards: () => dispatch(unturnCards()),
  };
};

const MemoryGameContainer = connect(mapStateToProps, mapDispatchToProps)(
  MemoryGame
);

export default MemoryGameContainer;
