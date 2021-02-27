import dark from './dark.json'
import light from './light.json'
import { overrideTypography, typography } from './typography'

const darkObj = {
  ...dark,
  typography,
  overrides: {
    MuiTypography: overrideTypography
  }
}

const lightObj = {
  ...light,
  typography,
  overrides: {
    MuiTypography: overrideTypography
  }
}

export const themes = { light: lightObj, dark: darkObj }
