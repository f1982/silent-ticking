import Box from '@material-ui/core/Box'
import { DrawerProps } from '@material-ui/core/Drawer'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputAdornment from '@material-ui/core/InputAdornment'
import MenuItem from '@material-ui/core/MenuItem'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import TextField from '@material-ui/core/TextField'
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { UserSettings } from '../../types/types'
import { pomodoroSessions } from '../../config'

const SettingRow = styled(Box)`
  padding: 10px 0 10px 0;
`

const StyledFieldLabel = styled(TextField)`
  .MuiOutlinedInput-notchedOutline {
    border: 1px solid #636363;
  }
`
const StyledOutFieldLabel = styled(OutlinedInput)`
  .MuiOutlinedInput-root {
  }
  & fieldset {
    color: #ffcc00;
    border: 1px solid #636363;
  }
  & span {
    color: #ffcc00;
  }
`
interface RightDrawerProps extends DrawerProps {
  // onClose: () => void
  // settings: UserSettings
  // onSettingUpdate: (setting: Object) => void
}

const PomodoroSetting: React.FC<RightDrawerProps> = (
  {
    // onClose,
    // settings,
    // onSettingUpdate,
    // ...rest
  }
) => {
  const [timeFormat, setTimeFormat] = useState('24h')
  const [showSecond, setShowSecond] = useState(true)
  const [session, setSession] = useState('')

  useEffect(() => {
    // setTimeFormat(settings.timeFormat)
    // setShowSecond(settings.showSecond)
  }, [])

  const handleSessionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value
    setSession(value)
  }

  const handleShowSecondChange = (
    evt: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setShowSecond(checked)
    // onSettingUpdate({ showSecond: checked })
  }

  return (
    <Box
      p={4.2}
      display='flex'
      height='100%'
      width='300px'
      flexDirection='column'>
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
