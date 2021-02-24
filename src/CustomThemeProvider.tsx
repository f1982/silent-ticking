import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

// eslint-disable-next-line no-unused-vars

interface ThemeContext {
  currentTheme: string
  setTheme: (themeName: string) => void
}
export const CustomThemeContext = React.createContext<ThemeContext | null>(null)

interface CustomThemeProviderProps {
  children: React.ReactNode
  themes: any
}

const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
  themes
}) => {
  // Read current theme from localStorage or maybe from an api
  const currentTheme = localStorage.getItem('appTheme') || 'dark'

  // State to hold the selected theme name
  const [themeName, _setThemeName] = useState(currentTheme)

  // Retrieve the theme object by theme name
  const theme = createMuiTheme(themes[themeName])

  // Wrap _setThemeName to store new theme names in localStorage
  const setThemeName = (name: string) => {
    localStorage.setItem('appTheme', name)
    _setThemeName(name)
  }

  const contextValue = {
    currentTheme: themeName,
    setTheme: setThemeName
  }

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </MuiThemeProvider>
    </CustomThemeContext.Provider>
  )
}

export default CustomThemeProvider
