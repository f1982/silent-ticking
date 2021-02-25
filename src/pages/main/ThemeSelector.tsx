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
        <Box>
          <FormControlLabel
            control={
              <Switch
                title={currentTheme}
                checked={currentTheme === 'dark'}
                onChange={handleThemeChange}
              />
            }
            label=''
          />
        </Box>
        <Box ml={5} display='flex' alignItems='center'>
          {currentTheme}
        </Box>
      </>
    )
  }
  return null
}

export default ThemeSelector
