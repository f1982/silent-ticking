import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  body {
    display: flex;
    height: 100vh;
  }
  #root {
    flex:1;
  }
`
export default GlobalStyle
