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
    height: 100%;
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 32px;
    font-weight: 600;
  }

  span {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  textarea:focus, input:focus {
    outline: none;
  }
`
