import { Container, Form } from "./styles";

import placeholderImg from '../../assets/userPlaceholder.svg'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Menu } from '../../components/Menu'

export function Associates() {
  return(
    <Container>
      <Header />
      <main>
        <Menu />
        <div className="newAssociate">
          <h1>Novo Sócio</h1>
          <Form>
            <div className="name">
              <span>Nome</span>
              <input type="text" placeholder="Nome do Sócio" />
            </div>
            <div className="maritalStatu">
              <span>Estado Civil</span>
              <input type="text" placeholder="Estado Civil" />
            </div>
            <div className="spouse">
              <span>Conjugê</span>
              <input type="text" placeholder="Nome do Conjugê" />
            </div>
            <div className="address">
              <span>Endereço</span>
              <input type="text" placeholder="Ex.: Avenida Brasil"/>
            </div>
            <div className="number">
              <span>Número</span>
              <input type="text" placeholder="Ex.: 57"/>
            </div>
            <div className="district">
              <span>Bairro</span>
              <input type="text" placeholder="Ex.: Centro" />
            </div>
            <div className="city">
              <span>Cidade</span>
              <input type="text" placeholder="Ex.: Lagoa Vermelha"/>
            </div>
            <div className="state">
              <span>Estado</span>
              <input type="text" placeholder="Ex.: RS"/>
            </div>
            <div className="cep">
              <span>CEP</span>
              <input type="text" placeholder="Ex.: 95300000" />
            </div>
            <div className="cpf">
              <span>CPF</span>
              <input type="text" placeholder="Ex.: 123.456.789-00"/>
            </div>
            <div className="rg">
              <span>RG</span>
              <input type="text" placeholder="Ex.: 0000000000" />
            </div>
            <div className="email">
              <span>E-mail</span>
              <input type="email" name="E-mail" placeholder="exemplo@exemplo.com"/>
            </div>
            <div className="career">
              <div className="span">Profissão</div>
              <input type="text" placeholder="Ex.: Engenheiro"/>
            </div>
            <div className="status">
              <span>Situação</span>
              <input type="text" placeholder="Ativo, Licenciado ou Inativo"/>
            </div>
            <div className="photo">
              <span>Foto</span>
              <input type="image" src={placeholderImg} alt="" placeholder="Carregue uma imagem"/>
            </div>
          </Form>
        </div>
      </main>
      <Footer />
    </Container>
  )
}