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
    font-family: 'Inter';
  }

  button, a {
    cursor: pointer;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  span {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`
