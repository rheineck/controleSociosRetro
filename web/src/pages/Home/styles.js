import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  main {
    display: grid;
    grid-template-areas: "menu content";
    margin: 0;
    justify-content: start;
    height: 100%;
  }

  .content {
    grid-area: content;
    width: 100%;
    margin: 60px;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.BLACK};
    margin-bottom: 32px;
  }

  .overview {
    display: grid;
    grid-template-areas: 
      "title title"
      "associates finance";
    justify-content: space-between;
    padding-bottom: 50px;
  }

  .overview .title {
    grid-area: title;

  }

  #associates, #finance {
    width: 440px;
    height: 280px;
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.WHITE};
  }

  #associates {
    grid-area: associates;
  }

  #finance {
    grid-area: finance;
  }

  .rapidAccess {
    display: grid;
    grid-template-areas: 
      "title title title title"
      "button button button button";
    grid-template-columns: 220px 220px 220px 220px;
    justify-content: space-between;
  }

  .rapidAccess h2, .rapidAccess button {
    margin-bottom: 16px;
  }



`