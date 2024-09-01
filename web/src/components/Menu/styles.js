import styled from 'styled-components'

export const Container = styled.div`
  grid-area: menu;
  background: ${({ theme }) => theme.COLORS.GRAY_800};
  max-width: 340px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  display: flex;
  flex-direction: column;
  padding: 50px;

  .userInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  .userInfo img {
    padding-bottom: 24px;
  }

  #statusBox {
    padding: 2px;
    width: fit-content;
    background-color: ${({ theme }) => theme.COLORS.GREEN_BACKGROUND};
    border: 1px solid ${({ theme }) => theme.COLORS.GREEN};
    border-radius: 4px;
    color: ${({ theme }) => theme.COLORS.GREEN};
    font-size: 16px;
    font-weight: 200;
  }

  #statusRow {
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
    font-size: 18px;
    align-items: center;
  }

  .menu {
    display: flex;
    flex-direction: column;
  }

  .menu button {
    padding-bottom: 10px;
  }

  .menu h2 {
    font-size: 24px;
    margin-bottom: 2px;
  }

  .menu hr {
    margin-bottom: 16px;
  }
`