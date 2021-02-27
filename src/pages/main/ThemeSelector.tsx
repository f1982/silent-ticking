import React, { useContext } from 'react'
import Switch from '@material-ui/core/Switch'
import Box from '@material-ui/core/Box'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { CustomThemeContext } from '../../theme/CustomThemeProvider'

const ThemeSelector = () => {
  const context = useContext(CustomThemeContext)
  if (context) {
    const { currentTheme, setTheme } = context

    const handleThemeChange = () => {
      setTheme(currentTheme === 'light' ? 'dark' : 'light')
    }

    return (
      <>
        <FormControlLabel
          control={
            <Switch
              title={currentTheme}
              checked={currentTheme === 'dark'}
              onChange={handleThemeChange}
            />
          }
          style={{ width: `100%` }}
          labelPlacement='end'
          label={currentTheme}
        />
      </>
    )
  }
  return null
}

export default ThemeSelector
