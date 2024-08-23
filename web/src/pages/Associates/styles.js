import styled from 'styled-components'

export const Container = styled.div`
  
  main {
    display: grid;
    grid-template-areas: "menu content";
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.GRAY_800};
    font-weight: 600;
  }

  .newAssociate {
    grid-area: content;
  }
`

export const Form = styled.form`

  span {
    color: ${({ theme }) => theme.COLORS.GRAY_800};
  }
`