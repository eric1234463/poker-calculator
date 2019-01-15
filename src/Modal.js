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
  background: #fff;
  border-radius: 4px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 500px;
`;

class Modal extends Component {
  render() {
    const { handleModalShow } = this.props;
    return (
      <BackDrop onClick={handleModalShow}>
        <Wrapper>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </Wrapper>
      </BackDrop>
    );
  }
}

export default Modal;
