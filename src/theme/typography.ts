import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import createPalette from '@material-ui/core/styles/createPalette'
import createTypography from '@material-ui/core/styles/createTypography'

export const typography = createTypography(createPalette({}), {
  fontFamily: [
    "'Major Mono Display', monospace",
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

function pxToRem(value: number) {
  return `${value / 16}rem`
}

// Generate breakpoints so we can use them in the theme definition
const breakpoints = createBreakpoints({})

export const overrideTypography = {
  h1: {
    fontSize: pxToRem(60),
    [breakpoints.up('md')]: {
      fontSize: pxToRem(90)
    }
  }
}
