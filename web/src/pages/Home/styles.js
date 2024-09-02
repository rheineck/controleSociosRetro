import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  main {
    display: grid;
    grid-template-areas: "menu content";
    grid-template-columns: 340px;
    margin: 0;
    justify-content: start;
    height: 100%;
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