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
  constructor(props) {
    super(props);
    this.boardSize = 16;
    this.init();
  }

  init = () => {
    const randomDinos = this.props.getRandomDinos(this.boardSize / 2);
    const pairedDinos = randomDinos.concat(randomDinos);
    const cards = shuffle(pairedDinos).map((card, index) => {
      return {
        ...card,
        cardId: index,
      };
    })

    this.props.resetBoard(cards);
  };


  render() {
    const cards = this.props.board;
    const { turnedCards, foundCards } = this.props;

    const onClick = cardId => {
      logFlipMemoryCard(cardId);
      this.props.turnCard(cardId);
    };

    return (
      <div>
        <Roar inputRef={el => this.roarElement = el} />
        <Grid>
          {cards.map(dino => {
            const { cardId } = dino;
            return (
              <MemoryButton onClick={() => onClick(cardId)}>
                {isCardFound(foundCards, cardId) ? (
                  <DinoCard dino={dino} opacity={0.2} />
                ) : isCardTurned(turnedCards, cardId) ? (
                  <DinoCard dino={dino} />
                ) : (
                      <DinoCard dino={dino} displayImage={false} />
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
