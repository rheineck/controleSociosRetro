import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.GRAY_800};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  
  display: flex;
  margin: 12px 0;
  
  
  > input {
    width: 100%;
    height: 48px;

    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }

  }

  > svg {
    margin: 16px;
  }
`