import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Menu } from '../../components/Menu'
import { Button } from '../../components/Button'

export function Associates() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [spouse, setSpouse] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState(""); 
  const [state, setState] = useState("");
  const [cep, setCep] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [email, setEmail] = useState("");
  const [career, setCareer] = useState("");
  const [status, setStatus] = useState("");

  function handleAddAssociates() {
    if(!name || !cpf || !rg) {
      alert("preencha todos os campos!");
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("maritalStatus", maritalStatus);
    formData.append("spouse", spouse);
    formData.append("address", address);
    formData.append("number", number);
    formData.append("district", district);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("cep", cep);
    formData.append("cpf", cpf);
    formData.append("rg", rg);
    formData.append("email", email);
    formData.append("career", career);
    formData.append("status", status);

    api.post("/new", formData)
    .then(() => {
      alert("Associado cadastrado com sucesso!");
      navigate(-1);
    })
  }

  return(
    <Container>
      <Header />
      <main>
        <Menu />
        <div className="newAssociate">
          <Form>
            <header>Novo Sócio</header>
            <section>
              <div id="label">
                <label for="name">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Nome do Sócio" 
                  onChange={e => setName(e.target.value)}
                />
              </div>
            </section>
            <section>
              <div id="label">
                <label for="maritalStatus">Estado Civil</label>
                <select 
                  name="maritalStatus" 
                  id="maritalStatus"
                  onChange={e => setMaritalStatus(e.target.value)}
                >
                  <option value="select">Selecionar</option>
                  <option value="single">Solteiro</option>
                  <option value="married">Casado</option>
                  <option value="divorce">Divorciado</option>
                  <option value="widower">Viúvo</option>
                </select> 
              </div>
              <div id="label">
                <label for="spouse">Conjugê</label>
                <input 
                  type="text" 
                  id="spouse" 
                  placeholder="Nome do Conjugê" 
                  onChange={e => setSpouse(e.target.value)}
                />
              </div>
            </section>
            <section>
              <div id="label">
                <label for="address">Endereço</label>
                <input 
                  type="text" 
                  id="address" 
                  placeholder="Ex.: Avenida Brasil"
                  onChange={e => setAddress(e.target.value)}
                />
              </div>
            </section>
            <section>
              <div id="label">
                <label for="number">Número</label>
                <input 
                  type="text" 
                  id="number" 
                  placeholder="Ex.: 57"
                  onChange={e => setNumber(e.target.value)}
                />
              </div>
              <div id="label">
                <label for="district">Bairro</label>
                <input 
                  type="text" 
                  id="district" 
                  placeholder="Ex.: Centro"
                  onChange={e => setDistrict(e.target.value)}
                />
              </div>
              <div id="label">
                <label for="city">Cidade</label>
                <input 
                  type="text" 
                  id="city" 
                  placeholder="Ex.: Lagoa Vermelha"
                  onChange={e => setCity(e.target.value)}
                />
              </div>
            </section>
            <section>
              <div id="label">
                <label for="state">Estado</label>
                <input 
                  type="text" 
                  id="state" 
                  placeholder="Ex.: RS"
                  onChange={e => setState(e.target.value)}
                />
              </div>
              <div id="label">
                <label for="cep">CEP</label>
                <input 
                  type="text" 
                  id="cep" 
                  placeholder="Ex.: 95300000"
                  onChange={e => setCep(e.target.value)}
                />
              </div>
              <div id="label">
                <label for="cpf">CPF</label>
                <input 
                  type="text" 
                  id="cpf" 
                  placeholder="Ex.: 123.456.789-00"
                  onChange={e => setCpf(e.target.value)}
                />
              </div>
            </section>
            <section>
              <div id="label">
                <label for="rg">RG</label>
                <input 
                  type="text" 
                  id="rg" 
                  placeholder="Ex.: 0000000000"
                  onChange={e => setRg(e.target.value)}
                />
              </div>
              <div id="label">
                <label for="email">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="exemplo@exemplo.com"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div id="label">
                <label for="career">Profissão</label>
                <input 
                  type="text" 
                  id="career" 
                  placeholder="Ex.: Engenheiro"
                  onChange={e => setCareer(e.target.value)}
                />
              </div>
            </section>
            <section>
              <div id="label">
                <label for="status">Situação</label>
                <select 
                  name="status" 
                  id="status"
                  onChange={e => setStatus(e.target.value)}
                >
                  <option value="select">Selecionar</option>
                  <option value="active">Ativo</option>
                  <option value="inactive">Inativo</option>
                  <option value="licensed">Licenciado</option>
                </select>
              </div>
              <div id="label">
                <label for="photo">Foto</label>
                <input className="inputPhoto" type="file" id="photo"/>
              </div>
            </section>
          </Form>
          <div className="buttons">
            <Button>Salvar e Sair</Button>
            <Button onClick={handleAddAssociates}>Salvar</Button>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}