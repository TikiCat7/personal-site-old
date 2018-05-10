import React, { Component } from 'react';
import styled from 'styled-components';
import Parallax from './components/Parallax';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Parallax/>
      </Container>
    );
  }
}

export default App;
