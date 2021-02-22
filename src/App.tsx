import React from 'react';
import styled from 'styled-components'
import './App.css';
import Clock from 'react-live-clock';

const StyledClock = styled(Clock)`
  font-size: 90px;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StyledClock format={'HH:mm:ss'} ticking={true} timezone={'Pacific/Auckland'} />
      </header>
    </div>
  );
}

export default App;
