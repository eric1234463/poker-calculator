import React, { Component } from 'react';
import styled from 'styled-components';

const BackDrop = styled.div`
  background: rgba(0, 0, 0, 0.77);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const Wrapper = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  width: 100%;
  > div {
    background: #fff;
    border-radius: 4px;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 12px 0;
  text-align: center;
  box-sizing: border-box;
`;

const Button = styled.button`
  background: rgba(23, 179, 163, 1);
  border-radius: 4px;
  width: 80%;
  display: block;
  color: #fff;
  text-align: center;
  margin: 0 auto;
  padding: 12px 0;
  box-sizing: border-box;
`;

class Modal extends Component {
  render() {
    const { handleModalShow } = this.props;
    return (
      <div>
        <BackDrop onClick={handleModalShow} />
        <Wrapper>
          <div>
            <Input type="text" placeholder={'Player 1'} />
            <Input type="text" placeholder={'Player 1'} />
            <Input type="text" placeholder={'Player 1'} />
            <Button type="button">Submit</Button>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Modal;
