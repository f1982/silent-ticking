import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import createPalette from '@material-ui/core/styles/createPalette'
import createTypography from '@material-ui/core/styles/createTypography'

const palette = createPalette({
  type: 'light',
  primary: {
    main: '#ffc400'
  },
  secondary: {
    main: '#00f1f1'
  },
  success: {
    main: '#c6ff00'
  },
  error: {
    main: '#ff0000'
  },

  warning: {
    main: '#ff6d00'
  },
  info: {
    main: '#ea80fc'
  },
  // 使用 `getContrastText()` 来最大化
  // 背景和文本的对比度
  contrastThreshold: 3,
  divider: '#d2d2d2'
})

export const typography = createTypography(palette, {
  fontFamily: [
    'Montserrat',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif'
  ].join(','),
  button: {
    fontSize: '1.2rem'
  },
  h1: {
    fontSize: '5.4rem'
  },
  h2: {
    fontSize: '3.6rem'
  },
  h3: {
    fontSize: '2.7rem'
  },
  h4: {
    fontSize: '2.1rem'
  },
  h5: {
    textAlign: 'left',
    fontSize: '1.5rem'
  },
  h6: {
    fontSize: '1.2rem'
  },
  body1: {
    fontSize: '1rem'
  },
  subtitle1: {
    fontSize: '0.9rem'
  },
  subtitle2: {
    fontSize: '0.8rem'
  },
  caption: {
    fontSize: '0.6rem'
  }
})

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    divider: '#666666'
  },
  typography,
  spacing: 8,
  shape: {
    borderRadius: 30
  }
})

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    divider: '#666666'
  },
  typography,
  spacing: 8,
  shape: {
    borderRadius: 30
  }
})

export { lightTheme, darkTheme }
