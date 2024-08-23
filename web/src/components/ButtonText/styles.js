import styled from 'styled-components'

export const Container = styled.button`
  background-color: transparent;
  border: none;

  display: flex;
  justify-content: space-between;

  font-size: 20px;
  cursor: ${({ isDisabled }) => !isDisabled ? "pointer" : "auto"};

  color: ${({ theme }) => theme.COLORS.GRAY_100};

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`