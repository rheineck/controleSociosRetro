import { Link } from 'react-router-dom'

import userPlaceholder from '../../assets/userPlaceholder.svg'

import { ButtonText } from '../ButtonText'

import { Container } from './styles'

export function Menu () {
  return (
    <Container>
      <div className="userInfo">
        <img src={userPlaceholder} alt="Foto do Usuário" />
        <h2>Olá, Usuário!</h2>
      </div>
      <div className="status">
        <div id="statusRow">
          <span>Status</span>
          <div id="statusBox">
            Ativo
          </div>
        </div>
        <div id="statusRow">
          <span>Cargo</span>
          <div id="statusBox">
            Tesoureiro
          </div>
        </div>
        <div id="statusRow">
          <span>Tipo Conta</span>
          <div id="statusBox">
            Usuário
          </div>
        </div>
      </div>
      <div className="menu">
        <h2>Menu</h2>
        <hr />
        <Link to="/">
          <ButtonText title="Painel" />
        </Link>
        <Link to="/associates">
          <ButtonText title="Sócios" />
        </Link>
        <ButtonText title="Carros" isDisabled={true}/>
        <ButtonText title="Financeiro" isDisabled={true}/>
        <ButtonText title="Meu Perfil" />
      </div>
    </Container>
  )
}