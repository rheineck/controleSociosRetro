import styled from "styled-components"

export const Container = styled.div`

  width: fit-content;
  border-radius: 4px;
  padding: 2px;
  font-size: 16px;
  font-weight: 200;
  border: 1px solid ${({ theme }) => theme.COLORS.GREEN};
  color: ${({ theme }) => theme.COLORS.GREEN};
  background-color: ${({ theme }) => theme.COLORS.GREEN_BACKGROUND};

  margin: 2px;
`