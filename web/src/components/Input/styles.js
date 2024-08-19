import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;

  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.GRAY_800};

  > input {
    background: transparent;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }

  }
`