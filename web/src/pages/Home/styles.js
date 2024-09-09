import styled from "styled-components"

export const Container = styled.div`

  flex-direction: column;
  justify-content: space-between;
  grid-template-areas:
    "header"
    "main"
    "footer";

  main {
    grid-area: main;
    display: grid;
    grid-template-areas: "menu content";
    grid-template-columns: 340px;
    justify-content: start;
    height: 90vh;
  }

  .content {
    grid-area: content;
    display: grid;
    grid-template-areas: "overview rapidAccess";
    width: 100%;
    height: fit-content;
    margin: 40px 90px;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.BLACK};
    margin-bottom: 32px;
  }

  .rapidAccess h2 {
    margin-bottom: 12px;
  }

  .overview {
  }

  #associates {
    width: 440px;
    height: 712px;
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.WHITE};
  }

  .associates, .cars, .reports, .finance {
    margin-bottom: 20px;
  }

  .rapidAccess button {
    margin-bottom: 12px;
  }


`