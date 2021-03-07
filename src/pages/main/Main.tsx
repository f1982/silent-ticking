import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import IconButton from '@material-ui/core/IconButton'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState } from 'react'
import styled from 'styled-components'
import ClockPage from '../clock/index'
import { DefaultUserSettings, UserSettings } from '../../types/types'
import RightDrawer from './RightDrawer'
import Pomodoro from '../pomodoro/index'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import TimerIcon from '@material-ui/icons/Timer'
import Drawer from '@material-ui/core/Drawer'
import SettingCommon from '../../components/SettingCommon'
import PomodoroSettings from '../pomodoro/PomodoroSettings'
import ClockSettings from '../clock/ClockSettings'

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
  flex-direction: row-reverse;
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

  const handleSettingsUpdate = (setting: Object) => {
    const newSettings = { ...userSettings, ...setting }
    setUserSettings(newSettings!)
  }

  const getMenuButton = () => {
    if (!fullscreenHandler.active) {
      return (
        <>
          <ToolButton
            onClick={() => {
              setOpenDraw(true)
            }}>
            <MenuIcon color='primary' fontSize='large' />
          </ToolButton>
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
          <div style={{ flex: 1 }} />
        </>
      )
    }
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
        {getMenuButton()}
        {getFullscreenButton()}
      </TopToolBar>

      <Box p={3} style={{ fontFamily: userSettings.fontFamily }}>
        {current === 'clock' ? <ClockPage /> : <Pomodoro />}
      </Box>

      {/* <RightDrawer
        settings={userSettings}
        open={openDraw}
        onSettingUpdate={handleSettingsUpdate}
        onClose={() => {
          setOpenDraw(false)
        }}
      /> */}

      <Drawer
        // settings={{}}
        open={openDraw}
        anchor='right'
        // onSettingUpdate={() => {}}
        onClose={() => {
          setOpenDraw(false)
        }}>
        <SettingCommon>
          {current === 'clock' ? <ClockSettings /> : <PomodoroSettings />}
        </SettingCommon>
      </Drawer>
    </Wrapper>
  )
}

export default Main
