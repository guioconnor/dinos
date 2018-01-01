import React from "react";
import DinoCard from "../DinoCard";
import Roar from "../../atoms/Roar";
import { shuffle } from 'lodash';
import { logFlipMemoryCard } from "../../../lib/analytics";

import Grid from './Grid';
import MemoryButton from './MemoryButton';

const isCardTurned = (turnedCards, cardId) => {
  return turnedCards.includes(cardId);
};

const isCardFound = (foundCards, cardId) => {
  return foundCards.includes(cardId);
};

class MemoryGame extends React.Component {
  static defaultProps = {
    silhouette: true,
  }

  constructor(props) {
    super(props);
    this.boardSize = 16;
    this.init();
  }

  init = () => {
    const randomCards =
      this.props.getRandomCards(this.boardSize / 2).map(card => {
        return {
          ...card,
          silhouette: false,
        }
      });
    const pairedCards =
      randomCards.concat(
        randomCards.map(card => {
          return {
            ...card,
            silhouette: this.props.silhouette,
          }
        })
      );
    const cards = shuffle(pairedCards).map((card, index) => {
      return {
        ...card,
        cardId: index,
      };
    })

    this.props.resetBoard(cards);
  };

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.foundCards !== this.props.foundCards) {
      this.roarElement.play();
    }
  }

  render() {
    const cards = this.props.board;
    const prefix = this.props.prefix;
    const { turnedCards, foundCards } = this.props;

    const onClick = cardId => {
      logFlipMemoryCard(cardId);
      this.props.turnCard(cardId);
    };

    return (
      <div>
        <Roar inputRef={el => this.roarElement = el} />
        <Grid>
          {cards.map(card => {
            const { cardId } = card;
            return (
              <MemoryButton onClick={() => onClick(cardId)}>
                {isCardFound(foundCards, cardId) ? (
                  <DinoCard item={card} prefix={prefix} opacity={0.2} />
                ) : isCardTurned(turnedCards, cardId) ? (
                  <DinoCard item={card} prefix={prefix} />
                ) : (
                      <DinoCard item={card} prefix={prefix} displayImage={false} />
                    )}
              </MemoryButton>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default MemoryGame;
