import styled from 'styled-components'

export const Container = styled.div`
  
  display: flex;
  justify-content: center;
  padding-top: 175px;

  .box {
    display: flex;
    align-items: center;
    flex-direction: column;
    background: ${({ theme }) => theme.COLORS.GRAY_900};
    width: 531px;
    height: 694px;
    border-radius: 16px;
    padding: 64px;
  }

  .brand {
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .brand span {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-size: 18px;
    margin-bottom: 12px;
  }

  .brand h1 {
    margin-bottom: 8px;
  }

  .brand img {
    width: 152px;
    height: 176px;
  }


`

export const Form = styled.form`
  width: 100%;
  margin-bottom: 16px;

  span {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
  }
`