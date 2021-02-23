import React from 'react'
import { ThemeProvider } from 'styled-components'
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import GlobalStyle from './theme/GlobalStyles'
import { darkTheme, lightTheme } from './theme/Theme'

interface Props {
  mode: string
  children: React.ReactNode
}

const Providers: React.FC<Props> = ({ children, mode }: Props) => {
  console.log('Providers mode', mode)
  const theme = mode === 'dark' ? darkTheme : lightTheme
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <GlobalStyle />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default Providers
