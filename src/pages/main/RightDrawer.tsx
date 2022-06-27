import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Drawer, { DrawerProps } from '@material-ui/core/Drawer'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import IconButton from '@material-ui/core/IconButton'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import LocalCafeIcon from '@material-ui/icons/LocalCafe'

import ThemeSelector from './ThemeSelector'
import { UserSettings } from '../../types/settings'

const SettingRow = styled(Box)`
  padding: 10px 0 10px 0;
`
interface RightDrawerProps extends DrawerProps {
  onClose: () => void
  settings: UserSettings
  onSettingUpdate: (setting: Object) => void
}

const RightDrawer: React.FC<RightDrawerProps> = ({
  onClose,
  settings,
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
    onSettingUpdate({ showSecond: checked })
  }

  const handleShowDateChange = (
    evt: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setShowDate(checked)
    onSettingUpdate({ showDate: checked })
  }

  return (
    <Drawer anchor={'right'} {...rest}>
      <Box
        p={4.2}
        display='flex'
        height='100%'
        width='300px'
        flexDirection='column'>
        <SettingRow>
          <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='space-between'>
            <Typography variant='h5' component='h1'>
              Silent Ticking
            </Typography>
            <Box flex={1} />
            <IconButton onClick={onClose}>
              <HighlightOffIcon color='primary' fontSize='large' />
            </IconButton>
          </Box>
        </SettingRow>

        <Box height='30px' />

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

        <Box flex={1} />

        <SettingRow>
          <Box display='flex' flexDirection='row'>
            <Box display='flex' flexDirection='column'>
              <Typography>Designer</Typography>
              <Typography>Jerry</Typography>
            </Box>
            <Box display='flex' ml={3} flexDirection='column'>
              <Typography>Developer</Typography>
              <Typography>Andy</Typography>
            </Box>
          </Box>
        </SettingRow>

        <SettingRow>
          <Button
            variant='outlined'
            href='https://www.buymeacoffee.com/jerryandy'
            size='small'
            startIcon={<LocalCafeIcon />}
            color='primary'>
            Buy me a Coffee
          </Button>
        </SettingRow>
        <Box>
          <Typography>Version: {process.env.REACT_APP_VERSION}</Typography>
          <Typography>Copyright 2020</Typography>
        </Box>
      </Box>
    </Drawer>
  )
}

export default RightDrawer
