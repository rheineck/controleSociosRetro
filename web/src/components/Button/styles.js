import styled from 'styled-components'

export const Container = styled.button`
  
  width: 100%;
  height: 45px;
  
  background-color: ${({ theme }) => theme.COLORS.RED};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.COLORS.BLACK};

  font-size: 16px;
  font-weight: 600;

  &:hover {
    background: ${({ theme }) => theme.COLORS.HOVER_RED};
  }
  
`