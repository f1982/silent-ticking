import React, { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import styled from 'styled-components'
import ClockKK from '../../components/Clock'
import RightDrawer from './RightDrawer'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'
import Container from '@material-ui/core/Container'
import { Typography } from '@material-ui/core'
import DateDisplay from '../../components/DateDisplay'
import { UserSettings, DefaultUserSettings } from '../../types/settings'
import { settings } from 'cluster'

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
        <ToolButton
          onClick={() => {
            setOpenDraw(true)
          }}>
          <MenuIcon color='primary' fontSize='large' />
        </ToolButton>
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
        <Box textAlign='left' pl={2}>
          {userSettings.showDate && <DateDisplay />}
        </Box>
        <ClockKK
          hourFormat={userSettings.timeFormat}
          showSecond={userSettings.showSecond}
          blinkSeparator={userSettings.blinkSeparator}
        />
      </Box>

      <RightDrawer
        settings={userSettings}
        open={openDraw}
        onSettingUpdate={handleSettingsUpdate}
        onClose={() => {
          setOpenDraw(false)
        }}
      />
    </Wrapper>
  )
}

export default Main
