import { Container } from './styles'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Menu } from '../../components/Menu'

export function Home () {
  return (
    <Container>
      <Header />
      <main>
        <Menu />
        <div className="content">
          <div className="overview">
            <div id="title">
              <h1>Visão Geral</h1>
              <hr />
            </div>
            <div className="associates"></div>
            <div className="finance"></div>
          </div>
          <div className="rapidAcess"></div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}