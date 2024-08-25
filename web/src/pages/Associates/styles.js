import styled from 'styled-components'

export const Container = styled.div`
  
  main {
    display: grid;
    grid-template-areas: "menu content";
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.GRAY_800};
    font-weight: 600;
    margin-bottom: 40px;
  }

  .newAssociate {
    grid-area: content;
    margin: 60px 120px;
  }

  .buttons {
    display: flex;
  }

  .buttons button:first-child {
    margin-right: 47px;
  }
`

export const Form = styled.form`

  section {
    display: grid;
    grid-template-areas:
      "name name name"
      "maritalStatus spouse spouse"
      "address address address"
      "number district city"
      "state cep status"
      "cpf rg email"
      "career photo photo";
  }

  div {
    margin-bottom: 6px;
  }
  
  .name {
    grid-area: name;
  }

  .maritalStatus {
    grid-area: maritalStatus;
  }

  .spouse {
    grid-area: spouse;
  }

  .address {
    grid-area: address;
  }

  .number {
    grid-area: number;
  }

  .district {
    grid-area: district;
  }

  .city {
    grid-area: city;
  }

  .state {
    grid-area: state;
  }

  .cep {
    grid-area: cep;
  }

  .status {
    grid-area: status;
  }

  .cpf {
    grid-area: cpf;
  }

  .rg {
    grid-area: rg;
  }

  .email {
    grid-area: email;
  }

  .career {
    grid-area: career;
  }

  .photo {
    grid-area: photo;
  }

  label {
    color: ${({ theme }) => theme.COLORS.GRAY_800};
    margin-bottom: 2px;
    display: flex;
  }

  input {
    background: ${({ theme }) => theme.COLORS.GRAY_100};
    color: ${({ theme }) => theme.COLORS.GRAY_800};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_8000};
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
  }

`