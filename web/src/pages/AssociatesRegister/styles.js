import styled from "styled-components";

export const Container = styled.div`

main {
  display: grid;
  grid-template-areas: "menu content"; 
  height: 90vh;
}

.content {
  grid-area: content;
  display: flex;
  flex-direction: column;
  height: 90vh;
}

svg {
  color: ${({ theme }) => theme.COLORS.GRAY_800};
}

table {
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 8px;
  width: 100%;
}

table tr:first-child {
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
}
`