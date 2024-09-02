import styled from "styled-components";

export const Container = styled.div`

  main {
    display: grid;
    grid-template-areas: "menu content";
    grid-template-columns: 340px;
    height: 90vh;
  }

  .content {
    grid-area: content;
    display: flex;
    flex-direction: column;
    height: 90vh;
    padding: 80px 100px;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.GRAY_800};
    margin-bottom: 12px;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_800};
  }

  table {
    outline: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
    border-collapse: collapse;
    border-radius: 8px;
    width: 100%;
  }

  thead, tbody tr {
    display: table;
    table-layout: fixed;
    width: 100%;
  }

  thead {
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-size: 18px;
    height: 36px;

    th {
      border: none;
    }
  }

  tr {
    text-align: center;
    height: 32px;
    font-size: 16px;
    font-weight: 500;
  }

  td:last-child {
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    
    button {
      height: 28px;
      width: fit-content;
      color: ${({ theme }) => theme.COLORS.GRAY_800};
      background: none;
    }
  }


  
  .tags {
    display: flex;
  }
`