import { EnvelopeSimple, LockSimple } from '@phosphor-icons/react'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Form } from './styles'
import LogoImg from '../../assets/logo.png'

export function SignIn() {

  return (
    <Container>
      <div className="box">
        <div className="brand">
          <img src={LogoImg} alt="Logo Retrô Car Club" />
          <h1>Retrô Car Club</h1>
          <span>Faça login e comece a usar</span>
        </div>
        <Form>
          <span>E-mail</span>
          <Input 
            icon={EnvelopeSimple}
            placeholder="Endereço de e-mail" 
            type="text"
          />
          <span>Senha</span>
          <Input 
            icon={LockSimple}
            placeholder="Senha" 
            type="password"
          />
        </Form>
        <Button>
          Entrar na plataforma
        </Button>
      </div>
    </Container>
  )
}