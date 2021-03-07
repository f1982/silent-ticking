import React, { useState } from 'react'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import ClockKK from '../../components/Clock'
import DateDisplay from '../../components/DateDisplay'
import { DefaultUserSettings, UserSettings } from '../../types/types'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

interface ClockProps {
  settings?: UserSettings
}

const Clock: React.FC<ClockProps> = ({ settings = DefaultUserSettings }) => {
  return (
    <Wrapper>
      <Box textAlign='left' pl={2}>
        {settings.showDate && <DateDisplay />}
      </Box>
      <ClockKK
        hourFormat={settings.timeFormat}
        showSecond={settings.showSecond}
        blinkSeparator={settings.blinkSeparator}
      />
    </Wrapper>
  )
}

export default Clock
