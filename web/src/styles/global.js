import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62,5%;
  }

  body {
    background: ${({ theme }) => theme.COLORS.GRAY_200};
    --webkit-font-smoothing: antialiased;
  }
`
