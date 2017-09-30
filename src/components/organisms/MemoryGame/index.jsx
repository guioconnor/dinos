import React from "react";
import styled from "styled-components";
import DinoCard from "../DinoCard";
import PlainButton from "../../atoms/PlainButton";
import Roar, { playRoar } from "../../atoms/Roar";
import { randomise } from "../../../lib/arrayHelpers";

const Grid = styled.div`
  display: grid;
  max-width: 790px;
  margin: 30px auto;
  grid-template-columns: 24.7% 24.7% 24.7% 24.7%;
  grid-gap: 25px 0.3%;
  grid-auto-rows: minmax(100px, auto);
  user-select: none;

  & a {
    width: auto;
  }
`;

class MemoryGame extends React.Component {
  constructor(props) {
    super(props);
    this.boardSize = 16;
    this.pairsAttempted = 0;
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
      this.pairsAttempted++;
      setTimeout(() => {
        this.checkMatch();
      }, 100);
    }
  };

  checkMatch = () => {
    const cards = this.state.cards.slice();
    const turnedCards = cards.filter(c => c.turned).map(c => c.id);
    const turnedCardsCount = turnedCards.length;

    if (cards[turnedCards[0]].name === cards[turnedCards[1]].name) {
      cards[turnedCards[0]].found = true;
      cards[turnedCards[1]].found = true;
      playRoar();
    }
    cards[turnedCards[0]].turned = false;
    cards[turnedCards[1]].turned = false;

    setTimeout(() => {
      this.setState({ cards });
    }, 5000);

    const foundCardsCount = cards.filter(c => c.found).map(c => c.id).length;
    if (foundCardsCount === this.boardSize) {
      setTimeout(() => this.init(), 1500);
    }
  };

  onClick = id => {
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
        <Roar />
        <Grid>
          {cards.map(dino => {
            const { image, name, id, turned, found } = dino;
            return (
              <PlainButton onClick={() => this.onClick(id)}>
                {found ? (
                  <DinoCard dino={dino} width={150} opacity={0.2} />
                ) : turned ? (
                  <DinoCard dino={dino} width={150} />
                ) : (
                  <DinoCard dino={dino} width={150} displayImage={false} />
                )}
              </PlainButton>
            );
          })}
        </Grid>
        <span>
          {this.pairsAttempted} attempts of{" "}
          {this.boardSize * (this.boardSize - 1)} possible pairs
        </span>
      </div>
    );
  }
}

export default MemoryGame;
