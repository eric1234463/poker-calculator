import React, { Component } from 'react';
import styled from 'styled-components';

const PlayerCard = styled.div`
  display: block;
  padding: 10px;
  > div {
    background: #fff;
    position: relative;
    height: 100px;
    border-radius: 4px;
  }
`;

const PlayerName = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: rgba(23, 179, 163, 1);
  padding: 30px;
`;

const CountLabel = styled.div`
  font-size: 16px;
  color: rgba(23, 179, 163, 1);
  position: absolute;
  font-weight: bold;
  top: 0;
  right: 0;
  padding: 12px;
`;

const TotalLabel = styled.div`
  font-size: 16px;
  color: rgba(23, 179, 163, 1);
  font-weight: bold;
  bottom: 0;
  right: 0;
  position: absolute;
  padding: 12px;
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 36px;
  color: #000;
  text-align: center;
  padding: 20px 0;
`;

const Label = styled.div`
  color: #000;
  text-align: center;
  padding: 20px 0;
`;

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #e9ebee;
`;

class App extends Component {
  state = {
    players: [
      {
        name: 'Player 1',
        total: 0,
        count: 0,
        rounds: [],
      },
      {
        name: 'Player 2',
        total: 0,
        count: 0,
        rounds: [],
      },
      {
        name: 'Player 3',
        total: 0,
        count: 0,
        rounds: [],
      },
      {
        name: 'Player 4',
        total: 0,
        count: 0,
        rounds: [],
      },
    ],
    rounds: 0,
    price: 1,
  };

  handleWinner = (index) => () => {
    
  };

  render() {
    const { players, rounds, price } = this.state;
    return (
      <Container>
        <Title>Round : {rounds}</Title>
        <Label>Price Per Card : {price}</Label>
        {players.map((player, index) => (
          <PlayerCard onClick={this.handleWinner(index)}>
            <div>
              <PlayerName>{player.name}</PlayerName>
              <CountLabel>Total: {player.total}</CountLabel>
              <TotalLabel>Card: {player.total}</TotalLabel>
            </div>
          </PlayerCard>
        ))}
      </Container>
    );
  }
}

export default App;
