import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Modal from './Modal';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Lato', sans-serif;
  }
`;

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
    isModalShow: false,
  };

  handleWinner = (index) => () => {
    this.setState({
      isModalShow: true
    })
  };

  handleModalShow = () => {
    this.setState({
      isModalShow: !this.state.isModalShow,
    });
  };

  render() {
    const { players, rounds, price, isModalShow } = this.state;
    return (
      <Container>
        <GlobalStyle />
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
        {isModalShow && <Modal handleModalShow={this.handleModalShow} />}
      </Container>
    );
  }
}

export default App;
