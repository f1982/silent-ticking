import { FormControlLabel } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useContext, useState } from 'react'
import Clock from 'react-live-clock'
import styled from 'styled-components'
import { CustomThemeContext } from './CustomThemeProvider'

const Wrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

const Tools = styled.div`
  position: absolute;
  top: 6%;
  right: 6%;
`

function App() {
  const [openDraw, setOpenDraw] = useState(false)
  const context = useContext(CustomThemeContext)
  if (context) {
    const { currentTheme, setTheme } = context

    const handleThemeChange = () => {
      setTheme(currentTheme === 'light' ? 'dark' : 'light')
    }

    return (
      <Wrapper>
        <Tools>
          <IconButton
            onClick={() => {
              setOpenDraw(true)
            }}>
            <MenuIcon color='primary' fontSize='large' />
          </IconButton>
        </Tools>

        <Box p={6}>
          <Typography variant='h1'>
            <Clock format='HH:mm:ss' ticking timezone='Pacific/Auckland' />
          </Typography>
        </Box>
        <Drawer anchor={'right'} open={openDraw} onClose={() => {}}>
          <Box p={3}>
            <Box
              display='flex'
              flexDirection='row'
              alignItems='center'
              justifyContent='space-between'
              width='500px'>
              <Typography>Silent Ticking</Typography>
              <IconButton
                onClick={() => {
                  setOpenDraw(false)
                }}>
                <HighlightOffIcon color='primary' fontSize='large' />
              </IconButton>
            </Box>
            <FormControlLabel
              control={
                <Switch
                  title='test'
                  checked={currentTheme === 'dark'}
                  onChange={handleThemeChange}
                />
              }
              label={currentTheme}
            />
          </Box>
        </Drawer>
      </Wrapper>
    )
  }
  return null
}

export default App
