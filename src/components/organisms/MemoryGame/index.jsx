import React from "react";
import DinoCard from "../DinoCard";
import Roar from "../../atoms/Roar";
import { randomise } from "../../../lib/arrayHelpers";
import { logFlipMemoryCard } from "../../../lib/analytics";

import Grid from './Grid';
import MemoryButton from './MemoryButton';

class MemoryGame extends React.Component {
  constructor(props) {
    super(props);
    this.boardSize = 16;
    this.init();
  }

  init = () => {
    const randomDinos = this.props.getRandomDinos(this.boardSize / 2);
    const pairedDinos = randomDinos.concat(randomDinos);

    this.state = {
      cards: randomise(pairedDinos).map((card, index) => {
        return {
          ...card,
          id: index,
          turned: false,
          found: false
        };
      })
    };
  };

  turnCard = id => {
    const cards = this.state.cards.slice();

    cards[id].turned = true;
    this.setState({ cards });

    const turnedCards = cards.filter(c => c.turned).map(c => c.id);
    const turnedCardsCount = turnedCards.length;

    if (turnedCardsCount === 2) {
      setTimeout(() => {
        this.checkMatch();
      }, 100);
    }
  };

  checkMatch = () => {
    const cards = this.state.cards.slice();
    const turnedCards = cards.filter(c => c.turned).map(c => c.id);

    if (cards[turnedCards[0]].name === cards[turnedCards[1]].name) {
      cards[turnedCards[0]].found = true;
      cards[turnedCards[1]].found = true;
      this.roarElement.play();
    }
    cards[turnedCards[0]].turned = false;
    cards[turnedCards[1]].turned = false;

    setTimeout(() => {
      this.setState({ cards });
    }, 1000);

    const foundCardsCount = cards.filter(c => c.found).map(c => c.id).length;
    if (foundCardsCount === this.boardSize) {
      setTimeout(() => this.init(), 1500);
    }
  };

  onClick = id => {
    logFlipMemoryCard(id);
    const cards = this.state.cards.slice();
    let turnedCards = cards.filter(c => c.turned).map(c => c.id);
    let turnedCardsCount = turnedCards.length;

    if (!cards[id].found && !cards[id].turned && turnedCardsCount < 2) {
      this.turnCard(id);
    }
  };

  render() {
    const { cards } = this.state;
    return (
      <div>
        <Roar inputRef={el => this.roarElement = el} />
        <Grid>
          {cards.map(dino => {
            const { id, turned, found } = dino;
            return (
              <MemoryButton onClick={() => this.onClick(id)}>
                {found ? (
                  <DinoCard dino={dino} opacity={0.2} />
                ) : turned ? (
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
