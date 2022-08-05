import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'
import MenuIcon from '@material-ui/icons/Menu'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import TimerIcon from '@material-ui/icons/Timer'
import React, { useState } from 'react'
import styled from 'styled-components'
import SettingCommon from '../../components/SettingCommon'
import { DefaultUserSettings, UserSettings } from '../../types/types'
import ClockSettings from '../clock/ClockSettings'
import ClockPage from '../clock/index'
import Pomodoro from '../pomodoro/index'
import PomodoroSettings from '../pomodoro/PomodoroSettings'

const Wrapper = styled(Container)`
  display: flex;
  background-color: ${props => props.theme.palette.background.default};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const TopToolBar = styled.div`
  width: 100%;
  height: 20%;
  top: 0;
  position: absolute;
  padding: 3rem;
  display: flex;
  flex-direction: row;
`

const ToolButton = styled(IconButton)`
  width: 42px;
  height: 42px;
  margin-left: 1.5rem;
`

interface MainProps {
  fullscreenHandler: any
}

const Main: React.FC<MainProps> = ({ fullscreenHandler }) => {
  const [openDraw, setOpenDraw] = useState(false)
  const [current, setCurrent] = useState('clock')
  const [userSettings, setUserSettings] = useState<UserSettings>(
    DefaultUserSettings
  )

  const handleSettingUpdate = (setting: object) => {
    // update specific option of setting
    setUserSettings(DefaultUserSettings)
  }

  const getMenuButton = () => {
    if (!fullscreenHandler.active) {
      return (
        <ToolButton
          onClick={() => {
            setOpenDraw(true)
          }}>
          <MenuIcon color='primary' fontSize='large' />
        </ToolButton>
      )
    }
  }

  const getShiftButton = () => {
    return (
      <ToolButton
        onClick={() => {
          setCurrent(flag => (flag === 'clock' ? 'pomodoro' : 'clock'))
        }}>
        {current === 'clock' ? (
          <QueryBuilderIcon color='primary' fontSize='large' />
        ) : (
          <TimerIcon color='primary' fontSize='large' />
        )}
      </ToolButton>
    )
  }

  const getFullscreenButton = () => {
    if (fullscreenHandler.active) {
      return (
        <ToolButton onClick={fullscreenHandler.exit}>
          <FullscreenExitIcon color='primary' fontSize='large' />
        </ToolButton>
      )
    } else {
      return (
        <ToolButton onClick={fullscreenHandler.enter}>
          <FullscreenIcon color='primary' fontSize='large' />
        </ToolButton>
      )
    }
  }

  return (
    <Wrapper maxWidth={false}>
      <TopToolBar>
        {getShiftButton()}
        <Box flex={1} />
        {getFullscreenButton()}
        {getMenuButton()}
      </TopToolBar>

      <Box p={3} style={{ fontFamily: userSettings.fontFamily }}>
        {current === 'clock' ? <ClockPage /> : <Pomodoro />}
      </Box>

      <Drawer
        open={openDraw}
        anchor='right'
        onClose={() => {
          setOpenDraw(false)
        }}>
        <SettingCommon>
          {current === 'clock' ? (
            <ClockSettings onSettingUpdate={handleSettingUpdate} />
          ) : (
            <PomodoroSettings />
          )}
        </SettingCommon>
      </Drawer>
    </Wrapper>
  )
}

export default Main
