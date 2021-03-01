import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import Countdown, { CountdownProps } from './Countdown'
import CustomThemeProvider from '../theme/CustomThemeProvider'

import { themes } from '../theme/themes'

export default {
  title: 'Core/Countdown',
  component: Countdown
} as Meta

const Template: Story<CountdownProps> = args => (
  <CustomThemeProvider themes={themes}>
    <Countdown {...args} />
  </CustomThemeProvider>
)

export const Short = Template.bind({})
Short.args = {
  time: 7,
  format: 'mm',
  onTimeUp: () => {
    console.log('time is up')
  }
}

export const Medium = Template.bind({})
Medium.args = {
  time: 60 * 2,
  format: 'mm',
  onTimeUp: () => {
    console.log('time is up')
  }
}

export const Long = Template.bind({})
Long.args = {
  time: 60 * 45,
  format: 'mm',
  children: <DirectionsRunIcon fontSize='large' />,
  onTimeUp: () => {
    console.log('time is up')
  }
}
