import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import { DrawerProps } from '@material-ui/core/Drawer'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Switch from '@material-ui/core/Switch'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ThemeSelector from '../../components/ThemeSelector'
import { DefaultUserSettings, UserSettings } from '../../types/types'

const SettingRow = styled(Box)`
  padding: 10px 0 10px 0;
`
interface ClockSettingsProps extends DrawerProps {
  settings?: UserSettings
  onSettingUpdate: (setting: Object) => void
}

const ClockSettings: React.FC<ClockSettingsProps> = ({
  settings = DefaultUserSettings,
  onSettingUpdate,
  ...rest
}) => {
  const [timeFormat, setTimeFormat] = useState('24h')
  const [showSecond, setShowSecond] = useState(true)
  const [showDate, setShowDate] = useState(true)

  useEffect(() => {
    setTimeFormat(settings.timeFormat)
    setShowSecond(settings.showSecond)
  }, [settings])

  const handleTimeFormatChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = (event.target as HTMLInputElement).value
    setTimeFormat(value)
    if (onSettingUpdate) onSettingUpdate({ timeFormat: value })
  }

  const handleShowSecondChange = (
    evt: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setShowSecond(checked)
    if (onSettingUpdate) onSettingUpdate({ showSecond: checked })
  }

  const handleShowDateChange = (
    evt: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setShowDate(checked)
    if (onSettingUpdate) onSettingUpdate({ showDate: checked })
  }

  return (
    <>
      <SettingRow>
        <RadioGroup
          aria-label='hour-format'
          name='hour-format'
          value={timeFormat}
          onChange={handleTimeFormatChange}>
          <Box display='flex'>
            <FormControlLabel value='12h' control={<Radio />} label='12H' />
            <Box flex={1} />
            <FormControlLabel value='24h' control={<Radio />} label='24H' />
          </Box>
        </RadioGroup>
      </SettingRow>
      <Divider />

      <SettingRow>
        <FormControlLabel
          control={
            <Switch
              title='second'
              checked={showSecond}
              onChange={handleShowSecondChange}
            />
          }
          style={{ width: `100%` }}
          labelPlacement='end'
          label='Show Second'
        />
      </SettingRow>
      <Divider />

      <SettingRow>
        <FormControlLabel
          control={
            <Switch
              title='second'
              checked={showDate}
              onChange={handleShowDateChange}
            />
          }
          style={{ width: `100%` }}
          labelPlacement='end'
          label='Show Date'
        />
      </SettingRow>
      <Divider />

      <SettingRow>
        <ThemeSelector />
      </SettingRow>
      <Divider />
    </>
  )
}

export default ClockSettings
