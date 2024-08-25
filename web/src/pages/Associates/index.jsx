import { Container, Form } from "./styles";

import placeholderImg from '../../assets/userPlaceholder.svg'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Menu } from '../../components/Menu'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Associates() {
  return(
    <Container>
      <Header />
      <main>
        <Menu />
        <div className="newAssociate">
          <h1>Novo Sócio</h1>
          <Form>
            <section>
              <div className="name">
                <label for="name">Nome</label>
                <input type="text" id="name" placeholder="Nome do Sócio" />
              </div>
              <div className="maritalStatus">
                <label for="maritalStatus">Estado Civil</label>
                <input type="text" id="maritalStatus" placeholder="Estado Civil" />
              </div>
              <div className="spouse">
                <label for="spouse">Conjugê</label>
                <input type="text" id="spouse" placeholder="Nome do Conjugê" />
              </div>
              <div className="address">
                <label for="address">Endereço</label>
                <input type="text" id="address" placeholder="Ex.: Avenida Brasil"/>
              </div>
              <div className="number">
                <label for="number">Número</label>
                <input type="text" id="number" placeholder="Ex.: 57"/>
              </div>
              <div className="district">
                <label for="district">Bairro</label>
                <input type="text" id="district" placeholder="Ex.: Centro" />
              </div>
              <div className="city">
                <label for="city">Cidade</label>
                <input type="text" id="city" placeholder="Ex.: Lagoa Vermelha"/>
              </div>
              <div className="state">
                <label for="state">Estado</label>
                <input type="text" id="state" placeholder="Ex.: RS"/>
              </div>
              <div className="cep">
                <label for="cep">CEP</label>
                <input type="text" id="cep" placeholder="Ex.: 95300000" />
              </div>
              <div className="cpf">
                <label for="cpf">CPF</label>
                <input type="text" id="cpf" placeholder="Ex.: 123.456.789-00"/>
              </div>
              <div className="rg">
                <label for="rg">RG</label>
                <input type="text" id="rg" placeholder="Ex.: 0000000000" />
              </div>
              <div className="email">
                <label for="email">E-mail</label>
                <input type="email" id="email" placeholder="exemplo@exemplo.com"/>
              </div>
              <div className="career">
                <label for="career">Profissão</label>
                <input type="text" id="career" placeholder="Ex.: Engenheiro"/>
              </div>
              <div className="status">
                <label for="status">Situação</label>
                <input type="text" id="status" placeholder="Ativo, Licenciado ou Inativo"/>
              </div>
              <div className="photo">
                <label for="photo">Foto</label>
                <input type="image" id="photo" src={placeholderImg} alt="" placeholder="Carregue uma imagem"/>
              </div>
            </section>
          </Form>
          <div className="buttons">
            <Button>Salvar e Sair</Button>
            <Button>Salvar</Button>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}