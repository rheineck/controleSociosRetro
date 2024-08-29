import { Link } from 'react-router-dom'

import { Container } from './styles'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Menu } from '../../components/Menu'
import { Button } from '../../components/Button'

export function Home () {
  return (
    <Container>
      <Header />
      <main>
        <Menu />
        <div className="content">
          <div className="overview">
            <h1>Visão Geral</h1>
            <div id="associates"></div>
          </div>
          <div className="rapidAccess">
            <div className="associates">
              <h2>Sócios</h2>
              {/* <Link to="/associates"> */}
                <Button>Novo Sócio</Button>
              {/* </Link> */}
              <Button>Acessar Registro</Button>
            </div>
            <div className="cars">
              <h2>Carros</h2>
              <Button isDisabled={true}>Novo Carro</Button>
              <Button isDisabled={true}>Acessar Registro</Button>
            </div>
            <div className="reports">
              <h2>Relatórios</h2>
              <Button isDisabled={true}>Completo</Button>
              <Button isDisabled={true}>Sócios</Button>
              <Button isDisabled={true}>Carros</Button>
              <Button isDisabled={true}>Financeiro</Button>
            </div>
            <div className="finance">
              <h2>Financeiro</h2>
              <Button isDisabled={true}>Novo Lançamento</Button>
              <Button isDisabled={true}>Acesso</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}