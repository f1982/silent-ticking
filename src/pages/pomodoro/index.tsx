import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState } from 'react'
import styled from 'styled-components'
import Countdown, { CountdownStyles } from '../../components/Countdown'
import PomodoroSettings from './PomodoroSettings'
import RepeatIcon from '@material-ui/icons/Repeat'
import { Button } from '@material-ui/core'
import Box from '@material-ui/core/Box'
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

interface PomodoroProps {}

const CountdownStyleList = [
  CountdownStyles.DIGITAL,
  CountdownStyles.CIRCLE,
  CountdownStyles.PROGRESS
]

const Pomodoro: React.FC<PomodoroProps> = () => {
  const [styleIndex, setStyleIndex] = useState(0)
  const [countTime, setCountTime] = useState(0)

  return (
    <Wrapper>
      <Countdown
        format={CountdownStyleList[styleIndex]}
        onTimeUp={() => {
          alert('you finished a pomodoro time, congratulations!')
        }}
        time={countTime}>
        <DirectionsRunIcon fontSize='large' />
      </Countdown>
      <IconButton
        onClick={() => {
          setStyleIndex(index =>
            index < CountdownStyleList.length - 1 ? (index += 1) : (index = 0)
          )
        }}>
        <RepeatIcon color='secondary' fontSize='large' />
      </IconButton>
      <Box display='flex' flexDirection='row'>
        <Button
          onClick={() => {
            setCountTime(25 * 60)
          }}>
          25m
        </Button>
        <Button
          onClick={() => {
            setCountTime(10)
          }}>
          10s
        </Button>
      </Box>
    </Wrapper>
  )
}

export default Pomodoro
