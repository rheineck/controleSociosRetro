import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

 
  main {
    display: grid;
    grid-template-areas: "menu content";
    margin: 0;
    justify-content: start;
  }

  .content {
    grid-area: content;
    width: 100%;
    margin: 60px;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.BLACK};
  }

  hr {
    background: ${({ theme }) => theme.COLORS.BLACK};
    border: none;
    height: 4px;
    margin-bottom: 22px;
  }

  .overview {
    display: grid;
    grid-template-areas: 
      "title title"
      "associates finance";
  }

  .overview .title {
    grid-area: title;

  }

  .associates, .finance {
    width: 440px;
    height: 280px;
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.WHITE};
  }

  .associates {
    grid-area: associates;
  }

  .finance {
    grid-area: finance;
  }
`