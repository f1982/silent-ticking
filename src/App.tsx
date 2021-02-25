import Paper from '@material-ui/core/Paper'
import React from 'react'
import styled from 'styled-components'
import Main from './pages/main/Main'

const Wrapper = styled(Paper)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

function App() {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  )
}

export default App
