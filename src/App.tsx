import React from 'react';
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Clock from 'react-live-clock';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

const StyledClock = styled(Clock)`
  font-size: 6rem;
  font-family: "Montserrat"
`

function App() {
  return (
    <Wrapper>
      <Paper>
       <Box p={6}> 
        <StyledClock format={'HH:mm:ss'} ticking={true} timezone={'Pacific/Auckland'} />
       </Box>
      </Paper>
    </Wrapper>
  );
}

export default App;
