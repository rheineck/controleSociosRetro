import styled from 'styled-components'

export const Container = styled.div`
  .box {
    background: ${({ theme }) => theme.COLORS.GRAY_900};
    width: 531px;
    height: 694px;
    border-radius: 16px;
  }

  .brand img {
    width: 152px;
    height: 176px;
  }
`

export const Form = styled.form``