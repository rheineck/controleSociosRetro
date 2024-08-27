import styled from 'styled-components'

export const Container = styled.footer`

  grid-area: footer;
  bottom: 0;
  position: absolute;
  
  height: 80px;
  width: 100%;
  background: ${({ theme }) => theme.COLORS.GRAY_800};
`