import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0; 
    padding: 0; 
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.secondary};
  } 
  html {
    font-size: 62.5%;
  }
  body {
    color: ${({ theme }) => theme.colors.text.primary};
    background: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
`
