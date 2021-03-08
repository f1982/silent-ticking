import Box from '@material-ui/core/Box'
import { DrawerProps } from '@material-ui/core/Drawer'
import InputAdornment from '@material-ui/core/InputAdornment'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import styled from 'styled-components'
import { pomodoroSessions } from '../../config'

const SettingRow = styled(Box)`
  padding: 10px 0 10px 0;
`

const StyledFieldLabel = styled(TextField)`
  .MuiOutlinedInput-notchedOutline {
    border: 1px solid #636363;
  }
`

interface RightDrawerProps extends DrawerProps {}

const PomodoroSetting: React.FC<RightDrawerProps> = () => {
  const [session, setSession] = useState('')

  const handleSessionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value
    setSession(value)
  }

  return (
    <Box display='flex' height='100%' flexDirection='column'>
      <SettingRow>
        <StyledFieldLabel
          fullWidth
          label='Session name'
          id='session-name'
          value={session}
          select
          onChange={handleSessionChange}
          helperText='Select session type'>
          {pomodoroSessions.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </StyledFieldLabel>
      </SettingRow>
      <SettingRow>
        <StyledFieldLabel
          label='Session during'
          id='session-during'
          defaultValue='25'
          helperText='set a duration for the session'
          InputProps={{
            startAdornment: <InputAdornment position='end'>min</InputAdornment>
          }}
          margin='normal'
          variant='outlined'
        />
      </SettingRow>
      <SettingRow>
        <StyledFieldLabel
          label='Break'
          id='break-time'
          defaultValue='5'
          helperText='set a break time'
          InputProps={{
            startAdornment: <InputAdornment position='end'>min</InputAdornment>
          }}
          margin='normal'
          variant='outlined'
        />
      </SettingRow>
      <SettingRow>
        <StyledFieldLabel
          label='Sharing'
          id='sharing-time'
          defaultValue='5'
          helperText='set a sharing time'
          InputProps={{
            startAdornment: <InputAdornment position='end'>min</InputAdornment>
          }}
          margin='normal'
          variant='outlined'
        />
      </SettingRow>
    </Box>
  )
}

export default PomodoroSetting
