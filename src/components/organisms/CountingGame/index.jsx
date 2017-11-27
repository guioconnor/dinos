import React from 'react';
import styled from 'styled-components';
import { speakSynth } from './../../../lib/speak';


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const Unit = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ace;
  flex: 0 0 30px;
`;

const Ten = styled.div`
  display: flex;
  width: 90px;
  height: 210px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  padding: 10px;
  border-radius: 5px;
  background: #666;

  & > div {
    margin-bottom: 10px;
  }
`;

const Board = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 30px;
  & > div {
    margin-right: 10px;
  }
`;

const NumberKey = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
  font-size: 40px;
  color: #fff;
  background: #666;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

const NumberDisplay = styled.div`
  background: #333;
  color: #ccc;
  height: 90px;
  width: 300px;
  line-height: 90px;
  border-radius: 10px;
  font-size: 80px;
  margin: 20px auto;
`;

const NumberPanel = styled.div`
  & > button {
    margin-right: 10px;
  }
`;


class CountingGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null,
      keyedNumbers: [],
      correct: false,
    }
  }

  init = (first) => {
    if (!first) {
      speakSynth('Try another one');
    }

    this.setState({
      number: getRandomInt(10, 40),
      keyedNumbers: [],
      correct: false,
    });
  }
  componentDidMount() {
    this.init(true);
  }

  componentDidUpdate = () => {
    const { number, keyedNumbers, correct } = this.state;
    const parsedNumber = parseInt(`${keyedNumbers[0]}${keyedNumbers[1]}`, 10);
    if (!correct && keyedNumbers.length === 2 && parsedNumber === number) {
      this.setState({ correct: true });
      speakSynth('Well done!');
    }
    else if (keyedNumbers.length === 2) {
      speakSynth(parsedNumber.toString());
      setTimeout(() => {
        this.init();
      }, 1500);
    }
  }

  onClickNumber = (pressedNumber) => {
    const { keyedNumbers, correct } = this.state;

    if (!correct && keyedNumbers.length < 2) {
      this.setState({
        keyedNumbers: [
          ...keyedNumbers,
          pressedNumber
        ],
      });
    }
  }

  render() {
    const { number, keyedNumbers, correct } = this.state;
    const tens = Math.floor(number / 10);
    const units = number % 10;
    return (
      <div>
        <Board>
          {Array.apply(0, Array(tens)).map(function (x, i) {
            return (
              <Ten>
                {Array.apply(0, Array(10)).map(function (x, i) {
                  return <Unit />;
                })}
              </Ten>);
          })}
          <Ten>
            {Array.apply(0, Array(units)).map(function (x, i) {
              return <Unit />;
            })}
          </Ten>
        </Board>
        <NumberDisplay>{keyedNumbers}</NumberDisplay>
        <NumberPanel>
          <NumberKey onClick={() => this.onClickNumber(1)}>1</NumberKey>
          <NumberKey onClick={() => this.onClickNumber(2)}>2</NumberKey>
          <NumberKey onClick={() => this.onClickNumber(3)}>3</NumberKey>
          <NumberKey onClick={() => this.onClickNumber(4)}>4</NumberKey>
          <NumberKey onClick={() => this.onClickNumber(5)}>5</NumberKey>
          <NumberKey onClick={() => this.onClickNumber(6)}>6</NumberKey>
          <NumberKey onClick={() => this.onClickNumber(7)}>7</NumberKey>
          <NumberKey onClick={() => this.onClickNumber(8)}>8</NumberKey>
          <NumberKey onClick={() => this.onClickNumber(9)}>9</NumberKey>
          <NumberKey onClick={() => this.onClickNumber(0)}>0</NumberKey>
        </NumberPanel>
        {/* <div>Correct: {correct ? 'yes' : 'no'}</div> */}
        {/* <button onClick={this.init}>Reset</button> */}
      </div>
    )
  }
}

export default CountingGame;