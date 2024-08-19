
import { Container, Form } from './styles'
import LogoImg from '../../assets/logo.png'

export function SignIn() {

  return (
    <Container>
      <div className="box">
        <div className="brand">
          <img src={LogoImg} alt="Logo Retrô Car Club" />
        </div>
        <Form></Form>
      </div>
    </Container>
  )
}