import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState } from 'react'
import styled from 'styled-components'
import Countdown, { CountdownStyles } from '../../components/Countdown'
import PomodoroSettings from './PomodoroSettings'
import RepeatIcon from '@material-ui/icons/Repeat'
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

  return (
    <Wrapper>
      <Countdown format={CountdownStyleList[styleIndex]} time={100}>
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
    </Wrapper>
  )
}

export default Pomodoro
