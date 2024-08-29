import { Link } from "react-router-dom";
import { Pencil } from "@phosphor-icons/react";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import { ButtonText } from "../../components/ButtonText";

export function AssociatesRegister () {
  return (
    <Container>
      <Header />
      <main>
        <Menu />
        <div className="content">
          <h1>Lista de Sócios</h1>
          <table>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Situação</th>
              <th>Editar</th>
            </tr>
            <tr>
              <td>01</td>
              <td>Raphael Gilioli Heineck</td>
              <td>Sócio</td>
              <td>Ativo</td>
              <td><ButtonText icon={Pencil} /></td>
            </tr>
          </table>
        </div>
      </main>
      <Footer />
    </Container>
  )
}