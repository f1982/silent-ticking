import React from 'react'
import styled from 'styled-components'
import Main from './pages/main/Main'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

const Full = styled(FullScreen)`
  width: 100%;
  height: 100%;
`
function App() {
  const handle = useFullScreenHandle()
  return (
    <>
      <Full handle={handle}>
        <Main fullscreenHandler={handle} />
      </Full>
    </>
  )
}

export default App
