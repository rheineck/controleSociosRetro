import { CaretRight } from '@phosphor-icons/react'

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
        <ButtonText title="Painel" icon={CaretRight} />
        <ButtonText title="Sócios" icon={CaretRight} />
        <ButtonText title="Carros" icon={CaretRight} isDisabled={true}/>
        <ButtonText title="Financeiro" icon={CaretRight} isDisabled={true}/>
        <ButtonText title="Meu Perfil" icon={CaretRight} />
      </div>
    </Container>
  )
}