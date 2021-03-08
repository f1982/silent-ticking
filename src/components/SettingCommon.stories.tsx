import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import CustomThemeProvider from '../theme/CustomThemeProvider'
import { themes } from '../theme/themes'
import SettingCommon from './SettingCommon'

export default {
  title: 'Core/SettingCommon',
  component: SettingCommon
} as Meta

const Template: Story = args => (
  <CustomThemeProvider themes={themes}>
    <SettingCommon>Content</SettingCommon>
  </CustomThemeProvider>
)

export const Normal = Template.bind({})
Normal.args = {}
