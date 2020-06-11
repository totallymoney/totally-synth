import React from 'react';
import styled from 'styled-components'

import Pickup from './components/Pickup'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Container>
      <Pickup />
    </Container>
  );
}

export default App;
