import React, { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Drawer, { DrawerProps } from '@material-ui/core/Drawer'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import IconButton from '@material-ui/core/IconButton'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import ThemeSelector from './ThemeSelector'
import { UserSettings } from '../../types/settings'

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
    // console.log('checked', checked)
    // console.log('evt', evt.target.value)
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
      <Box p={3} display='flex' height='100vh' flexDirection='column'>
        <Box
          pl={3}
          pr={3}
          pt={3}
          width='30vw'
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'>
          <Typography>
            <strong>Silent Ticking</strong>
          </Typography>
          <IconButton onClick={onClose}>
            <HighlightOffIcon color='primary' fontSize='large' />
          </IconButton>
        </Box>

        <RadioGroup
          aria-label='gender'
          name='gender1'
          value={timeFormat}
          onChange={handleTimeFormatChange}>
          <Box display='flex' p={3}>
            <FormControlLabel value='12h' control={<Radio />} label='12H' />
            <Box ml={5}>
              <FormControlLabel value='24h' control={<Radio />} label='24H' />
            </Box>
          </Box>
        </RadioGroup>
        <Divider />

        <Box display='flex' p={3}>
          <FormControlLabel
            control={
              <Switch
                title='second'
                checked={showSecond}
                onChange={handleShowSecondChange}
              />
            }
            label=''
          />
          <Box ml={5} display='flex' alignItems='center'>
            Show Second
          </Box>
        </Box>
        <Divider />

        <Box display='flex' p={3}>
          <FormControlLabel
            control={
              <Switch
                title='second'
                checked={showDate}
                onChange={handleShowDateChange}
              />
            }
            label=''
          />
          <Box ml={5} display='flex' alignItems='center'>
            Show Date
          </Box>
        </Box>
        <Divider />

        <Box display='flex' p={3}>
          <ThemeSelector />
        </Box>
        <Divider />

        <Box flex={1} />
        <Box p={3} display='flex' flexDirection='row'>
          <Box display='flex' flexDirection='column'>
            <Typography>Designer</Typography>
            <Typography>Jerry</Typography>
          </Box>
          <Box display='flex' ml={3} flexDirection='column'>
            <Typography>Developer</Typography>
            <Typography>Andy</Typography>
          </Box>
        </Box>
        <Box p={3}>
          <Typography>Copyright 2020</Typography>
        </Box>
      </Box>
    </Drawer>
  )
}

export default RightDrawer