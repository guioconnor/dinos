import React from "react";
import styled from "styled-components";
import DinoImage from "../../atoms/DinoImage";
import { randomise } from "../../../lib/arrayHelpers";

const Grid = styled.div`
  display: grid;
  max-width: 790px;
  margin: 30px auto;
  grid-template-columns: 24.5% 24.5% 24.5% 24.5%;
  grid-gap: 20px 0.5%;
  grid-auto-rows: minmax(100px, auto);

  & a {
    width: auto;
  }
`;

const Button = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;

const Placeholder = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10%;
  height: 150px;
  width: 150px;
  margin: auto;
`;

const FoundCard = styled.div`
  background: rgba(255, 255, 255, 0.4);
  padding: 30px;
  border-radius: 10%;
  height: 150px;
  width: 150px;
  margin: auto;
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
      }, 1000);
    }
  };

  checkMatch = () => {
    const cards = this.state.cards.slice();
    const turnedCards = cards.filter(c => c.turned).map(c => c.id);
    const turnedCardsCount = turnedCards.length;

    if (cards[turnedCards[0]].name === cards[turnedCards[1]].name) {
      cards[turnedCards[0]].found = true;
      cards[turnedCards[1]].found = true;
    }
    cards[turnedCards[0]].turned = false;
    cards[turnedCards[1]].turned = false;

    this.setState({ cards });

    const foundCardsCount = cards.filter(c => c.found).map(c => c.id).length;
    if (foundCardsCount === this.boardSize) {
      setTimeout(() => this.init(), 1000);
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
        <Grid>
          {cards.map(({ image, name, id, turned, found }) => (
            <Button onClick={() => this.onClick(id)}>
              {found ? (
                <FoundCard src={image} alt={name} width={150} height={150} />
              ) : turned ? (
                <DinoImage src={image} alt={name} width={150} height={150} />
              ) : (
                <Placeholder />
              )}
            </Button>
          ))}
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
