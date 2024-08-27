import styled from 'styled-components'

export const Container = styled.header`

  grid-area: header;
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 90px;

  button {
    height: 28px;
    width: 28px;
    background: none;
    border: none;
  }

  button svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  img {
    height: 50px;
    width: 50px;
  }
`