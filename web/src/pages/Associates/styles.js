import styled from "styled-components"

export const Container = styled.div`

  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  
  main {
    height: 90vh;
    grid-area: main;
    display: grid;
    grid-template-areas: "menu content";
    grid-template-columns: 340px;
  }

  .newAssociate {
    grid-area: content;
    margin: 60px 120px;
  }
  
  .buttons {
    display: flex;
    margin-right: 20px;
    margin-left: 400px;
  }

  .buttons button:first-child {
    margin-right: 47px;
  }
  `

export const Form = styled.form`

  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  header {
    color: ${({ theme }) => theme.COLORS.GRAY_800};
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 40px;
  }

  section {
    margin-bottom: 6px;
    display: flex;
  }

  label {
    color: ${({ theme }) => theme.COLORS.GRAY_800};
    margin-bottom: 2px;
  }

  #label {
    width: 100%;
    margin-right: 20px;
  }

  input {
    width: 100%;
    background: ${({ theme }) => theme.COLORS.GRAY_100};
    color: ${({ theme }) => theme.COLORS.GRAY_800};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_800};
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
  }

  select {
    width: 100%;
    background: ${({ theme }) => theme.COLORS.GRAY_100};
    color: ${({ theme }) => theme.COLORS.GRAY_800};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_800};
    border-radius: 4px;
    padding: 8px;
    height: 36px;
    font-size: 16px;
  }

  .inputPhoto {
    height: 36px;
    padding: 0;
  }
`