import { Link } from "react-router-dom";
import { Pencil } from "@phosphor-icons/react";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";

export function AssociatesRegister () {
  return (
    <Container>
      <Header />
      <main>
        <Menu />
        <div className="content">
          <h1>Lista de Sócios</h1>
          <table>
            <thead>
              <th>Id</th>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Situação</th>
              <th>Editar</th>
            </thead>
            <tbody>
            <tr>
              <td>01</td>
              <td>Raphael Gilioli Heineck</td>
              <td>Sócio</td>
              <td className="tags">
                <Tag title="Ativo" />
                <Tag title="Tesoureiro" />
                <Tag title="Admin" />
              </td>
              <td>
                <Button>
                  <Pencil />
                </Button>
              </td>      
            </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </Container>
  )
}