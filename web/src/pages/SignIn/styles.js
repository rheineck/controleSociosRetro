import styled from 'styled-components'

export const Container = styled.div`
  
  display: flex;
  justify-content: center;
  padding-top: 175px;

  .box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: ${({ theme }) => theme.COLORS.GRAY_900};
    width: 531px;
    height: 694px;
    border-radius: 16px;
    padding: 64px;
  }

  .brand span {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  .brand img {
    width: 152px;
    height: 176px;
  }


`

export const Form = styled.form``