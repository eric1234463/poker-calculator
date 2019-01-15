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
class Modal extends Component {
  render() {
    <BackDrop>
      <div>
        <input type='text' />
      </div>
    </BackDrop>;
  }
}

export default Modal;
