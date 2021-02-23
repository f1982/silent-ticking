import styled from 'styled-components'
import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Clock from 'react-live-clock'
import Box from '@material-ui/core/Box'
import { Typography } from '@material-ui/core'
import Switch from '@material-ui/core/Switch'
import Providers from './Providers'
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'
import deepOrange from '@material-ui/core/colors/deepOrange'
import lightBlue from '@material-ui/core/colors/lightBlue'
import deepPurple from '@material-ui/core/colors/deepPurple'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { typography } from './theme/Theme'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const Wrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

function pxToRem(value: number) {
  return `${value / 16}rem`
}

// Generate breakpoints so we can use them in the theme definition
const breakpoints = createBreakpoints({})

function App() {
  const [mode, setMode] = useState('light')

  const palletType = mode === 'dark' ? 'dark' : 'light'
  const mainPrimaryColor = mode === 'dark' ? orange[500] : lightBlue[500]
  const mainSecondaryColor = mode === 'dark' ? deepOrange[900] : deepPurple[500]
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    },
    typography,
    breakpoints,
    overrides: {
      MuiTypography: {
        h1: {
          fontSize: pxToRem(60),
          [breakpoints.up('md')]: {
            fontSize: pxToRem(90)
          }
        }
      }
    }
  })

  const handleThemeChange = () => {
    setMode(flag => (flag === 'light' ? 'dark' : 'light'))
  }
  return (
    // <Providers mode={mode}>
    <MuiThemeProvider theme={darkTheme}>
      <Wrapper>
        {/* <Paper> */}
        <Box p={6}>
          <Typography variant='h1'>
            <Clock format='HH:mm:ss' ticking timezone='Pacific/Auckland' />
          </Typography>
        </Box>
        <p>{mode}</p>
        <Switch checked={mode === 'dark'} onChange={handleThemeChange} />
        {/* </Paper> */}
      </Wrapper>
    </MuiThemeProvider>
    // </Providers>
  )
}

export default App
